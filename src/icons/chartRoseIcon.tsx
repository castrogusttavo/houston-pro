import React from 'react'
import { Icon, IconProps } from '../Icon'

export function chartRoseIcon({ iconName = "chart-rose", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}