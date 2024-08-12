import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Heading02Icon({ iconName = "heading02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}