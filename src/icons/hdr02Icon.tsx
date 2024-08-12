import React from 'react'
import { Icon, IconProps } from '../Icon'

export function hdr02Icon({ iconName = "hdr02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}