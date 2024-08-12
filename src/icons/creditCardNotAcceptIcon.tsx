import React from 'react'
import { Icon, IconProps } from '../Icon'

export function creditCardNotAcceptIcon({ iconName = "credit-card-not-accept", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}