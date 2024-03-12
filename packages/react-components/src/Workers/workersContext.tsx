import React, { PropsWithChildren, createContext, useRef } from 'react';
import omit from 'lodash/omit';
import {
  AddEventListenerInput,
  GetWorkerOutput,
  SetWorkerInput,
  WorkerMethods,
  WorkersContextInterface,
} from './WorkersContextInterface';

let WorkersContext: React.Context<WorkersContextInterface>;
const { Provider } = (WorkersContext = createContext<WorkersContextInterface>(
  {} as any,
));

const WorkersProvider = ({ children }: PropsWithChildren<any>): JSX.Element => {
  const workers = useRef<any>({});
  const workingWorkers = useRef<any>({});

  const setWorkerLoading = (workerId: string, isWorking: boolean) => {
    workingWorkers.current = {
      ...workingWorkers.current,
      [workerId]: isWorking,
    };
  };

  const getWorker = (workerId: string): GetWorkerOutput | undefined =>
    workers.current[workerId]
      ? {
          worker: workers.current[workerId],
          loading: workingWorkers.current[workerId] || false,
        }
      : undefined;

  const terminateWorker = (workerId: string) => {
    if (workerId) {
      if (workers.current[workerId]) {
        workers.current[workerId].terminate();
      }
    }
    setWorkerLoading(workerId, false);
  };

  const removeWorker = (workerId: string) => {
    if (workerId) {
      if (workers.current[workerId]) {
        workers.current[workerId].terminate();
        workers.current = omit(workers.current, workerId);
      }
      setWorkerLoading(workerId, false);
    }
  };

  const setWorkerPostMessage = (
    workerId: string,
    worker: Worker,
    methods: WorkerMethods | undefined,
  ): void => {
    const originalPostMessage = worker.postMessage.bind(worker);

    worker.postMessage = (message: any) => {
      setWorkerLoading(workerId, true);

      let finalMessage = message;

      if (methods?.postMessage?.getMessage) {
        finalMessage = methods.postMessage.getMessage(message);
      } else if (methods?.postMessage?.message) {
        finalMessage = methods.postMessage.message;
      }

      originalPostMessage(finalMessage);
      if (methods?.postMessage?.event) {
        console.log('postMessage');

        methods.postMessage.event(finalMessage);
      }
    };
  };

  const setWorkerAddEventListeners = (
    workerId: string,
    worker: Worker,
    eventListeners?: AddEventListenerInput[],
  ): void => {
    const eventListenersByType = (eventListeners || []).reduce(
      (acc, eventListener: AddEventListenerInput) => ({
        ...acc,
        [eventListener.type]: eventListener,
      }),
      {},
    );

    for (const eventKey of ['error', 'message', 'messageerror']) {
      const eventListener = eventListenersByType[eventKey];

      worker.addEventListener(eventKey, (event) => {
        if (eventListener) {
          console.log({ eventListener });

          eventListener.event(event);
        }
      });
    }
  };

  const setWorker = ({
    workerId,
    worker,
    methods,
    eventListeners,
  }: SetWorkerInput): Worker => {
    if (worker && !workers[workerId]) {
      setWorkerPostMessage(workerId, worker, methods);
      setWorkerAddEventListeners(workerId, worker, eventListeners);

      workers.current = {
        ...workers.current,
        [workerId]: worker,
      };
    }

    return worker;
  };

  return (
    <Provider value={{ getWorker, setWorker, removeWorker, terminateWorker }}>
      {children}
    </Provider>
  );
};

export { WorkersContext, WorkersProvider };
