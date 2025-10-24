"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

function Progress({
  className,
  value,
  brandColor = 'green',
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root> & { brandColor?: string }) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        `relative h-2 w-full overflow-hidden rounded-full bg-surface-muted`,
        className
      )}
      value={value}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={`h-full w-full flex-1 transition-all ${
          brandColor === 'black' ? 'bg-brand-black' :
          brandColor === 'green' ? 'bg-brand-green' :
          brandColor === 'purple' ? 'bg-brand-purple' :
          brandColor === 'orange' ? 'bg-brand-orange' :
          brandColor === 'blue' ? 'bg-brand-blue' :
          'bg-brand-green'
        }`}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }