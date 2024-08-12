import React from 'react'
import { Icon, IconProps } from '../Icon'

export function fortressIcon({ iconName = "fortress", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}