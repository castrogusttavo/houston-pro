import React from 'react'
import { Icon, IconProps } from '../Icon'

export function chartMinimumIcon({ iconName = "chart-minimum", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}