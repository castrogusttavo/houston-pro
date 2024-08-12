import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Chip02Icon({ iconName = "chip02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}