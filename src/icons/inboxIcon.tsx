import React from 'react'
import { Icon, IconProps } from '../Icon'

export function inboxIcon({ iconName = "inbox", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}