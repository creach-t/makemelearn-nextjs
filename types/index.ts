export interface Registration {
  id: string
  email: string
  source: string
  metadata?: Record<string, any>
  isVerified: boolean
  verificationToken?: string
  unsubscribedAt?: Date
  createdAt: Date
  updatedAt: Date
}

export interface Contact {
  id: string
  name: string
  email: string
  subject: string
  message: string
  metadata?: Record<string, any>
  status: 'new' | 'read' | 'replied' | 'archived'
  createdAt: Date
  updatedAt: Date
}

export interface Stat {
  id: string
  metricName: string
  metricValue: number
  date: Date
  createdAt: Date
}

export interface PageView {
  id: string
  page: string
  userAgent?: string
  ip?: string
  referer?: string
  metadata?: Record<string, any>
  createdAt: Date
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean
  message: string
  data?: T
  errors?: any[]
}

// Form types
export interface SubscriptionFormData {
  email: string
  source?: string
  metadata?: Record<string, any>
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

// Component props
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  children: React.ReactNode
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  helperText?: string
  options: { value: string; label: string }[]
}

// Metadata types
export interface PageMetadata {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  canonical?: string
}

// Stats types
export interface DashboardStats {
  totalRegistrations: number
  dailyRegistrations: number
  totalContacts: number
  dailyContacts: number
  topSources: Array<{ source: string; count: number }>
}

// Navigation types
export interface NavItem {
  name: string
  href: string
  disabled?: boolean
}

export interface SocialLink {
  name: string
  href: string
  icon: React.ComponentType<any>
  disabled?: boolean
}
