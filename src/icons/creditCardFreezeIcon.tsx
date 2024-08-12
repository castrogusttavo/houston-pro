import React from 'react'
import { Icon, IconProps } from '../Icon'

export function creditCardFreezeIcon({ iconName = "credit-card-freeze", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}