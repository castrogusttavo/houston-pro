import React from 'react'
import { Icon, IconProps } from '../Icon'

export function dashboardCircleAddIcon({ iconName = "dashboard-circle-add", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}