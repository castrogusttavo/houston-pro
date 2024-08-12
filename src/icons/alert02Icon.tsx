import React from 'react'
import { Icon, IconProps } from '../Icon'

export function alert02Icon({ iconName = "alert02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}