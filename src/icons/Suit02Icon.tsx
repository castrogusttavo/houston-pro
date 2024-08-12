import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Suit02Icon({ iconName = 'suit02', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
