import React from 'react'
import { Icon, IconProps } from '../Icon'

export function uv02Icon({ iconName = "uv02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}