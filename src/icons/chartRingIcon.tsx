import React from 'react'
import { Icon, IconProps } from '../Icon'

export function chartRingIcon({ iconName = "chart-ring", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}