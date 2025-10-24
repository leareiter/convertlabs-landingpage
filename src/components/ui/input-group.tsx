"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const inputGroupVariants = cva(
  "flex items-center",
  {
    variants: {
      variant: {
        default: "border border-input bg-background",
        ghost: "border-0 bg-transparent",
      },
      size: {
        default: "h-10",
        sm: "h-9",
        lg: "h-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface InputGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof inputGroupVariants> {
  asChild?: boolean
}

const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div"
    return (
      <Comp
        className={cn(
          inputGroupVariants({ variant, size }),
          "rounded-md overflow-hidden",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
InputGroup.displayName = "InputGroup"

const InputGroupInput = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    className={cn(
      "flex-1 bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    ref={ref}
    {...props}
  />
))
InputGroupInput.displayName = "InputGroupInput"

const InputGroupTextarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    className={cn(
      "flex-1 bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 resize-none",
      className
    )}
    ref={ref}
    {...props}
  />
))
InputGroupTextarea.displayName = "InputGroupTextarea"

const InputGroupAddon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    align?: "inline-start" | "inline-end" | "block-start" | "block-end"
  }
>(({ className, align = "inline-end", ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center",
      align === "inline-start" && "order-first",
      align === "inline-end" && "order-last",
      align === "block-start" && "flex-col items-stretch",
      align === "block-end" && "flex-col items-stretch order-last",
      className
    )}
    {...props}
  />
))
InputGroupAddon.displayName = "InputGroupAddon"

const InputGroupText = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "px-3 py-2 text-sm text-muted-foreground",
      className
    )}
    {...props}
  />
))
InputGroupText.displayName = "InputGroupText"

const InputGroupButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    className={cn(
      "px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      className
    )}
    ref={ref}
    {...props}
  />
))
InputGroupButton.displayName = "InputGroupButton"

export {
  InputGroup,
  InputGroupInput,
  InputGroupTextarea,
  InputGroupAddon,
  InputGroupText,
  InputGroupButton,
}
