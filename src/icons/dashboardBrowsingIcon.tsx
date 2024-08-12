import React from 'react'
import { Icon, IconProps } from '../Icon'

export function dashboardBrowsingIcon({ iconName = "dashboard-browsing", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}