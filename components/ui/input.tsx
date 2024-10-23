import * as React from "react"
import { cn } from "@/lib/utils"
import { useThemeStore } from "@/store/themeStore" // Fix the import path

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  // Add any custom props here
  customProp?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const { theme } = useThemeStore()
    
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          theme === 'dark' && "border-gray-700 bg-gray-800 text-white placeholder-gray-400",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
