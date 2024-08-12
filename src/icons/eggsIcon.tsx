import React from 'react'
import { Icon, IconProps } from '../Icon'

export function eggsIcon({ iconName = "eggs", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}