export type ToastType = 'danger' | 'warning' | 'alert' | 'news' | 'success'

export type ToastProps = {
  id: string
  deleteToast: (id: string) => void
  title: string
  description: string
  type: ToastType
  position?: string
  autoDelete?: boolean
  autoDeleteTime?: number
}

export type ToastContextProps = {
  addToast: (toast: ToastProps) => void
}
