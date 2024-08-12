import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bubbleChatUserIcon({ iconName = "bubble-chat-user", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}