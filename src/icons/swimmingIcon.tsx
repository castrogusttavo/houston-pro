import React from 'react'
import { Icon, IconProps } from '../Icon'

export function swimmingIcon({ iconName = "swimming", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}