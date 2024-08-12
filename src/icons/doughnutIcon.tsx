import React from 'react'
import { Icon, IconProps } from '../Icon'

export function doughnutIcon({ iconName = "doughnut", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}