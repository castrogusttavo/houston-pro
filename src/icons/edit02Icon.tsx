import React from 'react'
import { Icon, IconProps } from '../Icon'

export function edit02Icon({ iconName = "edit02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}