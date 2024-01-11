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
  setWorker: (input: SetWorkerInput) => void;
  removeWorker: (workerId: string) => void;
};

type UseWorkersWithId = (useWorkerWorkerId: string) => {
  getWorker: () => GetWorkerOutput | undefined;
  setWorker: (input: SetWorkerWithWorkerIdInput) => void;
  removeWorker: () => void;
};

const useWorkers: UseWorkersWithoutId & UseWorkersWithId = (
  useWorkerWorkerId?: string,
) => {
  const { getWorker, setWorker, removeWorker }: WorkersContextInterface =
    useContext(WorkersContext);

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
  }: SetWorkerWithWorkerIdInput) => {
    if (useWorkerWorkerId) {
      return setWorker({ workerId: useWorkerWorkerId, worker, methods });
    } else {
      if (!workerId) {
        throw new Error('workerId is required');
      }
      return setWorker({ workerId, worker, methods });
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

  return {
    getWorker: getWorkerByWorkerId,
    setWorker: setWorkerByWorkerId,
    removeWorker: removeWorkerByWorkerId,
  };
};

export default useWorkers;
