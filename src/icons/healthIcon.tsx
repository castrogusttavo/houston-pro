import React from 'react'
import { Icon, IconProps } from '../Icon'

export function healthIcon({ iconName = "health", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}