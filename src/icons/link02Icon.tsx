import React from 'react'
import { Icon, IconProps } from '../Icon'

export function link02Icon({ iconName = "link02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}