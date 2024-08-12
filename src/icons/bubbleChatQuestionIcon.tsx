import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bubbleChatQuestionIcon({ iconName = "bubble-chat-question", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}