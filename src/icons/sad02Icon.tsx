import React from 'react'
import { Icon, IconProps } from '../Icon'

export function sad02Icon({ iconName = "sad02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}