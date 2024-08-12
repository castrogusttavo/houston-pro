import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bubbleChatIncomeIcon({ iconName = "bubble-chat-income", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}