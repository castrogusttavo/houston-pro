import React from 'react'
import { Icon, IconProps } from '../Icon'

export function notificationSquareIcon({ iconName = "notification-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}