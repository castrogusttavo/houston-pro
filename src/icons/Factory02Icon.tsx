import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Factory02Icon({ iconName = 'factory02', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
