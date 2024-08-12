import React from 'react'
import { Icon, IconProps } from '../Icon'

export function moneySecurityIcon({ iconName = "money-security", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}