import React from 'react'
import { Icon, IconProps } from '../Icon'

export function loading02Icon({ iconName = "loading02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}