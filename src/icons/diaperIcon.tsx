import React from 'react'
import { Icon, IconProps } from '../Icon'

export function diaperIcon({ iconName = "diaper", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}