import React from 'react'
import { Icon, IconProps } from '../Icon'

export function svg02Icon({ iconName = "svg02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}