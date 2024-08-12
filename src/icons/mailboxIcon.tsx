import React from 'react'
import { Icon, IconProps } from '../Icon'

export function mailboxIcon({ iconName = "mailbox", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}