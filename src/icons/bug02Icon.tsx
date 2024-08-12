import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bug02Icon({ iconName = "bug02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}