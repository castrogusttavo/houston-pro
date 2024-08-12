import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Bitcoin02Icon({ iconName = "bitcoin02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}