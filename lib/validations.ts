import { z } from 'zod'

// Newsletter subscription schema
export const subscriptionSchema = z.object({
  email: z
    .string()
    .min(1, 'L\'email est requis')
    .email('L\'email doit être valide')
    .max(255, 'L\'email est trop long'),
  source: z.string().optional().default('website'),
  metadata: z.record(z.any()).optional(),
})

// Contact form schema
export const contactSchema = z.object({
  name: z
    .string()
    .min(1, 'Le nom est requis')
    .max(100, 'Le nom est trop long')
    .regex(/^[a-zA-ZÀ-ÿ\s-']+$/, 'Le nom contient des caractères non valides'),
  email: z
    .string()
    .min(1, 'L\'email est requis')
    .email('L\'email doit être valide')
    .max(255, 'L\'email est trop long'),
  subject: z
    .string()
    .min(1, 'Le sujet est requis')
    .max(200, 'Le sujet est trop long'),
  message: z
    .string()
    .min(10, 'Le message doit contenir au moins 10 caractères')
    .max(2000, 'Le message est trop long'),
})

// Stats increment schema
export const statsSchema = z.object({
  metricName: z.string().min(1).max(100),
  metricValue: z.number().int().min(0).optional().default(1),
})

// Page view tracking schema
export const pageViewSchema = z.object({
  page: z.string().min(1).max(255),
  userAgent: z.string().optional(),
  referer: z.string().optional(),
  metadata: z.record(z.any()).optional(),
})

// Export types
export type SubscriptionInput = z.infer<typeof subscriptionSchema>
export type ContactInput = z.infer<typeof contactSchema>
export type StatsInput = z.infer<typeof statsSchema>
export type PageViewInput = z.infer<typeof pageViewSchema>
