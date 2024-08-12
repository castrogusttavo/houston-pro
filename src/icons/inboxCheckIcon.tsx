import React from 'react'
import { Icon, IconProps } from '../Icon'

export function inboxCheckIcon({ iconName = "inbox-check", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}