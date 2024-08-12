import React from 'react'
import { Icon, IconProps } from '../Icon'

export function scrollHorizontalIcon({ iconName = "scroll-horizontal", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}