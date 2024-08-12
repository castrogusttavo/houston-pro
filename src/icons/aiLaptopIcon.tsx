import React from 'react'
import { Icon, IconProps } from '../Icon'

export function aiLaptopIcon({ iconName = "ai-laptop", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}