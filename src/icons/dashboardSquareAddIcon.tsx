import React from 'react'
import { Icon, IconProps } from '../Icon'

export function dashboardSquareAddIcon({ iconName = "dashboard-square-add", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}