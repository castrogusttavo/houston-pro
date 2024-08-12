import React from 'react'
import { Icon, IconProps } from '../Icon'

export function sidebarTopIcon({ iconName = "sidebar-top", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}