import React from 'react'
import { Icon, IconProps } from '../Icon'

export function dashboardCircleEditIcon({ iconName = "dashboard-circle-edit", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}