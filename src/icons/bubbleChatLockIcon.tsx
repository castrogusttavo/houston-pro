import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bubbleChatLockIcon({ iconName = "bubble-chat-lock", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}