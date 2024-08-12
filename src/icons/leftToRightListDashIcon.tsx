import React from 'react'
import { Icon, IconProps } from '../Icon'

export function leftToRightListDashIcon({ iconName = "left-to-right-list-dash", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}