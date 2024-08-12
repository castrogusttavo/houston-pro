import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Jsx02Icon({ iconName = "jsx02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}