import React from 'react'
import { Icon, IconProps } from '../Icon'

export function creditCardAddIcon({ iconName = "credit-card-add", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}