import React from 'react'
import { Icon, IconProps } from '../Icon'

export function appleIcon({ iconName = "apple", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}