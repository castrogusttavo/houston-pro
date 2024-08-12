import React from 'react'
import { Icon, IconProps } from '../Icon'

export function notificationCircleIcon({ iconName = "notification-circle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}