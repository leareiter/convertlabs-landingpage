import { z } from "zod"

// Schéma pour le calculateur Site/LP
export const siteFormSchema = z.object({
  type: z.enum(['lp', 'site'], { 
    message: "Sélectionnez un type de projet" 
  }),
  pages: z.number().min(1, "Au moins 1 page").max(100, "Maximum 100 pages"),
  tech: z.enum(['code', 'nocode'], { 
    message: "Choisissez une technologie" 
  }),
  modules: z.array(z.enum(['cms', 'form', 'crm', 'animations', 'blog', 'member', 'multilang']))
    .optional()
    .default([])
})

// Schéma pour le calculateur Prototype
export const prototypeFormSchema = z.object({
  type: z.enum(['figma', 'system'], { 
    message: "Sélectionnez un type de prototype" 
  }),
  screens: z.number().min(1, "Au moins 1 écran").max(100, "Maximum 100 écrans"),
  fidelity: z.enum(['wireframe', 'high', 'pixel'], { 
    message: "Choisissez une fidélité" 
  }).optional(),
  target: z.enum(['lp', 'web', 'mobile', 'both'], { 
    message: "Choisissez une plateforme cible" 
  })
})

// Schéma pour le calculateur MVP
export const mvpFormSchema = z.object({
  screens: z.number().min(1, "Au moins 1 écran").max(200, "Maximum 200 écrans"),
  platform: z.enum(['web', 'mobile', 'both'], { 
    message: "Choisissez une plateforme" 
  }),
  hasDesign: z.enum(['has', 'no'], { 
    message: "Indiquez si vous avez un design" 
  }),
  features: z.array(z.enum(['auth', 'payment', 'dashboard', 'profile', 'roles', 'notifs', 'chat', 'realtime', 'upload', 'export', 'api1', 'api3', 'ai']))
    .optional()
    .default([]),
  backend: z.enum(['none', 'light', 'complex'], { 
    message: "Choisissez le niveau de backend" 
  })
})

// Schéma pour le calculateur CRM
export const crmFormSchema = z.object({
  type: z.enum(['scratch', 'migration'], { 
    message: "Sélectionnez un type de projet CRM" 
  }),
  users: z.enum(['1-3', '4-10', '11-25', '26-50', '51-100', '100+'], { 
    message: "Sélectionnez le nombre d'utilisateurs" 
  }),
  crmSource: z.enum(['salesforce', 'hubspot', 'zoho', 'pipedrive', 'airtable', 'autre'], { 
    message: "Sélectionnez le CRM source" 
  }).optional(),
  crmTarget: z.enum(['salesforce', 'hubspot', 'zoho', 'pipedrive', 'airtable', 'autre'], { 
    message: "Sélectionnez le CRM cible" 
  }).optional(),
  dataVolume: z.enum(['<1k', '1k-5k', '5k-20k', '20k-50k', '50k-100k', '100k+'], { 
    message: "Sélectionnez le volume de données" 
  }).optional(),
  integrations: z.enum(['1-3', '4-7', '8-12', '13+'], { 
    message: "Sélectionnez le nombre d'intégrations" 
  }),
  training: z.boolean().default(false)
})

// Schéma pour le calculateur LinkedIn
export const linkedinFormSchema = z.object({
  leads: z.number().min(1, "Au moins 1 lead").max(10000, "Maximum 10000 leads"),
  icps: z.number().min(1, "Au moins 1 ICP").max(100, "Maximum 100 ICPs")
})

// Schéma pour la capture de leads
export const leadCaptureSchema = z.object({
  email: z.string().email("Email invalide").min(1, "Email requis"),
  firstName: z.string().min(1, "Prénom requis").max(50, "Prénom trop long"),
  lastName: z.string().min(1, "Nom requis").max(50, "Nom trop long"),
  company: z.string().min(1, "Entreprise requise").max(100, "Nom d'entreprise trop long")
})

// Schéma global du formulaire
export const projectCalculatorSchema = z.object({
  site: siteFormSchema.optional(),
  prototype: prototypeFormSchema.optional(),
  mvp: mvpFormSchema.optional(),
  crm: crmFormSchema.optional(),
  linkedin: linkedinFormSchema.optional(),
  lead: leadCaptureSchema.optional()
})

// Fonction pour obtenir le schéma actif selon le tab
export const getActiveSchema = (activeTab: string) => {
  switch (activeTab) {
    case 'site':
      return siteFormSchema
    case 'prototype':
      return prototypeFormSchema
    case 'mvp':
      return mvpFormSchema
    case 'crm':
      return crmFormSchema
    case 'linkedin':
      return linkedinFormSchema
    default:
      return z.object({})
  }
}

// Types TypeScript dérivés des schémas
export type SiteFormData = z.infer<typeof siteFormSchema>
export type PrototypeFormData = z.infer<typeof prototypeFormSchema>
export type MvpFormData = z.infer<typeof mvpFormSchema>
export type CrmFormData = z.infer<typeof crmFormSchema>
export type LinkedInFormData = z.infer<typeof linkedinFormSchema>
export type LeadCaptureData = z.infer<typeof leadCaptureSchema>
export type ProjectCalculatorData = z.infer<typeof projectCalculatorSchema>
