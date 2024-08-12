import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bubbleChatCancelIcon({ iconName = "bubble-chat-cancel", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}