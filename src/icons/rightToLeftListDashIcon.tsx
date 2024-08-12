import React from 'react'
import { Icon, IconProps } from '../Icon'

export function rightToLeftListDashIcon({ iconName = "right-to-left-list-dash", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}