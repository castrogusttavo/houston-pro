import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bubbleChatBlockedIcon({ iconName = "bubble-chat-blocked", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}