import React from 'react'
import { Icon, IconProps } from '../Icon'

export function cursor02Icon({ iconName = "cursor02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}