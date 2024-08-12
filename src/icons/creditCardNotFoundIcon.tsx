import React from 'react'
import { Icon, IconProps } from '../Icon'

export function creditCardNotFoundIcon({ iconName = "credit-card-not-found", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}