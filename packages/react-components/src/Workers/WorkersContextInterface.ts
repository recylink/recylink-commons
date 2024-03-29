export interface AddEventListenerInput {
  type: string;
  event: (event: MessageEvent<any>) => void;
}

export interface PostMessageInput {
  message?: any;
  getMessage?: (message: any) => any;
  event: (...args: any[]) => void;
}

export interface WorkerMethods {
  postMessage?: PostMessageInput;
  terminate?: () => void;
}

export interface SetWorkerWithWorkerIdInput {
  workerId?: string;
  worker: Worker;
  methods?: WorkerMethods;
  eventListeners?: AddEventListenerInput[];
}

export interface SetWorkerInput {
  workerId: string;
  worker: Worker;
  methods?: WorkerMethods;
  eventListeners?: AddEventListenerInput[];
}

export interface GetWorkerOutput {
  worker: Worker;
  loading: boolean;
}

export interface WorkersContextInterface {
  getWorker: (workerId: string) => GetWorkerOutput | undefined;
  setWorker: (setWorkerParams: SetWorkerInput) => Worker;
  removeWorker: (workerId: string) => void;
  terminateWorker: (workerId: string) => void;
}
