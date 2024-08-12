import React from 'react'
import { Icon, IconProps } from '../Icon'

export function fireSecurityIcon({ iconName = "fire-security", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}