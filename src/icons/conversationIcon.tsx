import React from 'react'
import { Icon, IconProps } from '../Icon'

export function conversationIcon({ iconName = "conversation", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}