import React from 'react'
import { Icon, IconProps } from '../Icon'

export function callOutgoing02Icon({ iconName = "call-outgoing02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}