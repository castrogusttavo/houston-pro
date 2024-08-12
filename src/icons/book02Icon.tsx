import React from 'react'
import { Icon, IconProps } from '../Icon'

export function book02Icon({ iconName = "book02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}