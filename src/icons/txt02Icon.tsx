import React from 'react'
import { Icon, IconProps } from '../Icon'

export function txt02Icon({ iconName = "txt02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}