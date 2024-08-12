import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Notification02Icon({
  iconName = 'notification02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
