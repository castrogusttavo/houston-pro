import React from 'react'
import { Icon, IconProps } from '../Icon'

export function mouse02Icon({ iconName = "mouse02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}