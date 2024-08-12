import React from 'react'
import { Icon, IconProps } from '../Icon'

export function creditCardValidationIcon({ iconName = "credit-card-validation", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}