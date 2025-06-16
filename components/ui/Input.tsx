import React, { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { InputProps } from '@/types'

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label 
            htmlFor={props.id} 
            className="block text-sm font-medium text-white"
          >
            {label}
            {props.required && <span className="text-red-400 ml-1">*</span>}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'form-input',
            error && 'input-error',
            className
          )}
          {...props}
        />
        {error && (
          <p className="form-error">{error}</p>
        )}
        {helperText && !error && (
          <p className="text-sm text-white/60">{helperText}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
