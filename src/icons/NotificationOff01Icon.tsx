import React from 'react'
import { Icon, IconProps } from '../Icon'

export function NotificationOff01Icon({
  iconName = 'notification-off01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
