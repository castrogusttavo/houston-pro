import React from 'react'
import { Icon, IconProps } from '../Icon'

export function mailbox01Icon({ iconName = "mailbox01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}