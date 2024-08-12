import React from 'react'
import { Icon, IconProps } from '../Icon'

export function chatBotIcon({ iconName = "chat-bot", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}