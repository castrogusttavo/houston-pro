import React from 'react'
import { Icon, IconProps } from '../Icon'

export function astronaut02Icon({ iconName = "astronaut02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}