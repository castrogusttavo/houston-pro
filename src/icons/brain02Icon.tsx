import React from 'react'
import { Icon, IconProps } from '../Icon'

export function brain02Icon({ iconName = "brain02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}