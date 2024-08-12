import React from 'react'
import { Icon, IconProps } from '../Icon'

export function sidebarLeftIcon({ iconName = "sidebar-left", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}