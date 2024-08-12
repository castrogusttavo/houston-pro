import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bubbleChatAddIcon({ iconName = "bubble-chat-add", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}