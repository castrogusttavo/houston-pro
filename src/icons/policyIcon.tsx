import React from 'react'
import { Icon, IconProps } from '../Icon'

export function policyIcon({ iconName = "policy", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}