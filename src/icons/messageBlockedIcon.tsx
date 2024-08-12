import React from 'react'
import { Icon, IconProps } from '../Icon'

export function messageBlockedIcon({ iconName = "message-blocked", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}