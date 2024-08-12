import React from 'react'
import { Icon, IconProps } from '../Icon'

export function chartMediumIcon({ iconName = "chart-medium", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}