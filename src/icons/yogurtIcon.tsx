import React from 'react'
import { Icon, IconProps } from '../Icon'

export function yogurtIcon({ iconName = "yogurt", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}