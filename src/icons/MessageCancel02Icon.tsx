import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MessageCancel02Icon({
  iconName = 'message-cancel02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
