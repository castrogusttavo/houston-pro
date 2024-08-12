import React from 'react'
import { Icon, IconProps } from '../Icon'

export function creditCardAcceptIcon({ iconName = "credit-card-accept", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}