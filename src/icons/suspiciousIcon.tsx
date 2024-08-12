import React from 'react'
import { Icon, IconProps } from '../Icon'

export function suspiciousIcon({ iconName = "suspicious", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}