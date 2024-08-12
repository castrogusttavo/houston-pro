import React from 'react'
import { Icon, IconProps } from '../Icon'

export function notificationBlock01Icon({ iconName = "notification-block01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}