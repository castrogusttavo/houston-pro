import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bubbleChatPreviewIcon({ iconName = "bubble-chat-preview", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}