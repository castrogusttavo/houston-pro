import React from 'react'
import { Icon, IconProps } from '../Icon'

export function tanIcon({ iconName = "tan", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}