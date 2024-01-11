import React, { PropsWithChildren, createContext, useState } from 'react';
import {
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
  const [workers, setWorkers] = useState<any>({});
  const [workingWorkers, setWorkingWorkers] = useState<any>({});

  const setWorkerLoading = (workerId: string, isWorking: boolean) => {
    setWorkingWorkers((prevWorkingWorkers: any) => ({
      ...prevWorkingWorkers,
      [workerId]: isWorking,
    }));
  };

  const getWorker = (workerId: string): GetWorkerOutput | undefined =>
    workers[workerId]
      ? {
          worker: workers[workerId],
          loading: workingWorkers[workerId] || false,
        }
      : undefined;

  const removeWorker = (workerId: string) => {
    if (workerId) {
      if (workers[workerId]) {
        setWorkers((prevWorkers: any) => {
          const newWorkers = { ...prevWorkers };
          delete newWorkers[workerId];
          return newWorkers;
        });
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
        methods.postMessage.event(finalMessage);
      }
    };
  };

  const setWorkerAddEventListeners = (
    worker: Worker,
    methods: WorkerMethods | undefined,
  ): void => {
    worker.addEventListener('message', (event) => {
      if (methods) {
        if (methods.addEventListener) {
          if (methods.addEventListener.type === 'message') {
            methods.addEventListener.event(event);
          }
        }
      }
    });
  };

  const setWorker = ({ workerId, worker, methods }: SetWorkerInput) => {
    if (worker) {
      setWorkerPostMessage(workerId, worker, methods);
      setWorkerAddEventListeners(worker, methods);

      setWorkers((currentWorkers: any) => ({
        ...currentWorkers,
        [workerId]: worker,
      }));
    }

    return worker;
  };

  return (
    <Provider value={{ getWorker, setWorker, removeWorker }}>
      {children}
    </Provider>
  );
};

export { WorkersContext, WorkersProvider };
