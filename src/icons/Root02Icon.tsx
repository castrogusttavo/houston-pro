import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Root02Icon({ iconName = "root02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}