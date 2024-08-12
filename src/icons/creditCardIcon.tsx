import React from 'react'
import { Icon, IconProps } from '../Icon'

export function creditCardIcon({ iconName = "credit-card", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}