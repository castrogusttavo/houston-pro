import React from 'react'
import { Icon, IconProps } from '../Icon'

export function securityValidationIcon({ iconName = "security-validation", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}