import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Task02Icon({ iconName = "task02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}