import React from 'react'
import { Icon, IconProps } from '../Icon'

export function loyaltyCardIcon({ iconName = "loyalty-card", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}