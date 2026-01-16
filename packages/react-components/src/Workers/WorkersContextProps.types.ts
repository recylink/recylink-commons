export type AddEventListenerInput = {
  type: string
  event: (event: MessageEvent<unknown>) => void
}

export type PostMessageInput = {
  message?: unknown
  getMessage?: (message: unknown) => unknown
  event: (...args: unknown[]) => void
}

export type WorkerMethods = {
  postMessage?: PostMessageInput
  terminate?: () => void
}

export type SetWorkerWithWorkerIdInput = {
  workerId?: string
  worker: Worker
  methods?: WorkerMethods
  eventListeners?: AddEventListenerInput[]
}

export type SetWorkerInput = {
  workerId: string
  worker: Worker
  methods?: WorkerMethods
  eventListeners?: AddEventListenerInput[]
}

export type GetWorkerOutput = {
  worker: Worker
  loading: boolean
}

export type WorkersContextProps = {
  getWorker: (workerId: string) => GetWorkerOutput | undefined
  setWorker: (setWorkerParams: SetWorkerInput) => Worker
  removeWorker: (workerId: string) => void
  terminateWorker: (workerId: string) => void
}
