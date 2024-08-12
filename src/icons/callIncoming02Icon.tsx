import React from 'react'
import { Icon, IconProps } from '../Icon'

export function callIncoming02Icon({ iconName = "call-incoming02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}