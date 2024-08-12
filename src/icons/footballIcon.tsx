import React from 'react'
import { Icon, IconProps } from '../Icon'

export function footballIcon({ iconName = "football", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}