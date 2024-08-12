import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Brain02Icon({ iconName = "brain02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}