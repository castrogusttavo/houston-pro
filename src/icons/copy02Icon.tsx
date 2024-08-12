import React from 'react'
import { Icon, IconProps } from '../Icon'

export function copy02Icon({ iconName = "copy02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}