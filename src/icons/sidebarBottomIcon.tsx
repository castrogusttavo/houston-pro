import React from 'react'
import { Icon, IconProps } from '../Icon'

export function sidebarBottomIcon({ iconName = "sidebar-bottom", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}