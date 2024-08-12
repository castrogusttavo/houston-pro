import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bubbleChatNotificationIcon({ iconName = "bubble-chat-notification", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}