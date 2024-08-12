import React from 'react'
import { Icon, IconProps } from '../Icon'

export function tag02Icon({ iconName = "tag02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}