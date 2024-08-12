import React from 'react'
import { Icon, IconProps } from '../Icon'

export function structure02Icon({ iconName = "structure02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}