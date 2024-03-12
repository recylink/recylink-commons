type ToastType = 'danger' | 'warning' | 'alert' | 'news' | 'success'

export interface ToastItem {
  id: string
  title: string
  description: string
  type: ToastType
  autoDelete: boolean
  autoDeleteTime: number
}
