import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bitcoin02Icon({ iconName = "bitcoin02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}