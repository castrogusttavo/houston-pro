import React from 'react'
import { Icon, IconProps } from '../Icon'

export function swimmingCapIcon({ iconName = "swimming-cap", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}