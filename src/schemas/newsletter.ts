import { z } from 'zod'

// Esquema de validación para el formulario de newsletter
export const newsletterSchema = z.object({
  email: z.string().email()
})

export type NewsletterForm = z.infer<typeof newsletterSchema>
