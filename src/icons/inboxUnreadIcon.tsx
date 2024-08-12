import React from 'react'
import { Icon, IconProps } from '../Icon'

export function inboxUnreadIcon({ iconName = "inbox-unread", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}