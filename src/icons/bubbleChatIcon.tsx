import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bubbleChatIcon({ iconName = "bubble-chat", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}