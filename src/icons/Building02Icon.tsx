import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Building02Icon({ iconName = "building02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}