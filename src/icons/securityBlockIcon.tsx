import React from 'react'
import { Icon, IconProps } from '../Icon'

export function securityBlockIcon({ iconName = "security-block", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}