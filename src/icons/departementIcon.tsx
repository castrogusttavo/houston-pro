import React from 'react'
import { Icon, IconProps } from '../Icon'

export function departementIcon({ iconName = "departement", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}