"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { VariantProps, cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const fieldVariants = cva(
  "space-y-2",
  {
    variants: {
      orientation: {
        default: "flex flex-col space-y-2",
        horizontal: "flex flex-row items-center space-x-4 space-y-0",
      },
    },
    defaultVariants: {
      orientation: "default",
    },
  }
)

export interface FieldProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof fieldVariants> {
  asChild?: boolean
}

const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  ({ className, orientation, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div"
    return (
      <Comp
        className={cn(fieldVariants({ orientation, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Field.displayName = "Field"

const FieldLabel = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    {...props}
  />
))
FieldLabel.displayName = "FieldLabel"

const FieldDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
FieldDescription.displayName = "FieldDescription"

const FieldError = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & {
    errors?: string[]
  }
>(({ className, errors, ...props }, ref) => {
  if (!errors || errors.length === 0) return null
  
  return (
    <p
      ref={ref}
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    >
      {errors[0]}
    </p>
  )
})
FieldError.displayName = "FieldError"

const FieldGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("space-y-4", className)}
    {...props}
  />
))
FieldGroup.displayName = "FieldGroup"

const FieldContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex-1", className)}
    {...props}
  />
))
FieldContent.displayName = "FieldContent"

const FieldSet = React.forwardRef<
  HTMLFieldSetElement,
  React.FieldsetHTMLAttributes<HTMLFieldSetElement>
>(({ className, ...props }, ref) => (
  <fieldset
    ref={ref}
    className={cn("space-y-4", className)}
    {...props}
  />
))
FieldSet.displayName = "FieldSet"

const FieldLegend = React.forwardRef<
  HTMLLegendElement,
  React.HTMLAttributes<HTMLLegendElement> & {
    variant?: "default" | "label"
  }
>(({ className, variant = "default", ...props }, ref) => (
  <legend
    ref={ref}
    className={cn(
      variant === "label" 
        ? "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        : "text-base font-semibold",
      className
    )}
    {...props}
  />
))
FieldLegend.displayName = "FieldLegend"

export {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldContent,
  FieldSet,
  FieldLegend,
}
