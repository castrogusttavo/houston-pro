import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bubbleChatOutcomeIcon({ iconName = "bubble-chat-outcome", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}