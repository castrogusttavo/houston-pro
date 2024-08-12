import React from 'react'
import { Icon, IconProps } from '../Icon'

export function securityIcon({ iconName = "security", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}