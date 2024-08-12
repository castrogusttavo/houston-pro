import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Hold02Icon({ iconName = 'hold02', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
