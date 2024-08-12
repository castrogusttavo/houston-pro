import React from 'react'
import { Icon, IconProps } from '../Icon'

export function tv02Icon({ iconName = "tv02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}