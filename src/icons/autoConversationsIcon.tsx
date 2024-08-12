import React from 'react'
import { Icon, IconProps } from '../Icon'

export function autoConversationsIcon({ iconName = "auto-conversations", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}