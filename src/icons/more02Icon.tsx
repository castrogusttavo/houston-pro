import React from 'react'
import { Icon, IconProps } from '../Icon'

export function more02Icon({ iconName = "more02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}