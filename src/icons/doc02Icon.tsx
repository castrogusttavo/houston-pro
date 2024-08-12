import React from 'react'
import { Icon, IconProps } from '../Icon'

export function doc02Icon({ iconName = "doc02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}