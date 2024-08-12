import React from 'react'
import { Icon, IconProps } from '../Icon'

export function securityCheckIcon({ iconName = "security-check", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}