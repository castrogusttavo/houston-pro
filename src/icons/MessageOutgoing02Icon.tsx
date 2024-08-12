import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MessageOutgoing02Icon({
  iconName = 'message-outgoing02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
