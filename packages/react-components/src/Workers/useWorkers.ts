import { useContext } from 'react';
import {
  GetWorkerOutput,
  SetWorkerInput,
  SetWorkerWithWorkerIdInput,
  WorkersContextInterface,
} from './WorkersContextInterface';
import { WorkersContext } from './workersContext';

type UseWorkersWithoutId = () => {
  getWorker: (workerId: string) => GetWorkerOutput | undefined;
  setWorker: (input: SetWorkerInput) => Worker | undefined;
  removeWorker: (workerId: string) => void;
  terminateWorker: (workerId: string) => void;
};

type UseWorkersWithId = (useWorkerWorkerId: string) => {
  getWorker: () => GetWorkerOutput | undefined;
  setWorker: (input: SetWorkerWithWorkerIdInput) => Worker | undefined;
  removeWorker: () => void;
  terminateWorker: () => void;
};

const useWorkers: UseWorkersWithoutId & UseWorkersWithId = (
  useWorkerWorkerId?: string,
) => {
  const {
    getWorker,
    setWorker,
    removeWorker,
    terminateWorker,
  }: WorkersContextInterface = useContext(WorkersContext);

  const getWorkerByWorkerId = (workerId?: string) => {
    if (useWorkerWorkerId) {
      return getWorker(useWorkerWorkerId);
    }
    if (!workerId) {
      throw new Error('workerId is required');
    }
    return getWorker(workerId);
  };

  const setWorkerByWorkerId = ({
    workerId,
    worker,
    methods,
    eventListeners,
  }: SetWorkerWithWorkerIdInput) => {
    if (useWorkerWorkerId) {
      return setWorker({
        workerId: useWorkerWorkerId,
        worker,
        methods,
        eventListeners,
      });
    } else {
      if (!workerId) {
        throw new Error('workerId is required');
      }
      return setWorker({ workerId, worker, methods, eventListeners });
    }
  };

  const removeWorkerByWorkerId = (workerId?: string) => {
    if (useWorkerWorkerId) {
      removeWorker(useWorkerWorkerId);
    } else {
      if (!workerId) {
        throw new Error('workerId is required');
      }
      removeWorker(workerId);
    }
  };

  const terminateWorkerByWorkerId = (workerId?: string) => {
    if (useWorkerWorkerId) {
      terminateWorker(useWorkerWorkerId);
    } else {
      if (!workerId) {
        throw new Error('workerId is required');
      }
      terminateWorker(workerId);
    }
  };

  return {
    getWorker: getWorkerByWorkerId,
    setWorker: setWorkerByWorkerId,
    removeWorker: removeWorkerByWorkerId,
    terminateWorker: terminateWorkerByWorkerId,
  };
};

export default useWorkers;
