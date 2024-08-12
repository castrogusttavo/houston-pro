import React from 'react'
import { Icon, IconProps } from '../Icon'

export function pieChartIcon({ iconName = "pie-chart", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}