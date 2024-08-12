import React from 'react'
import { Icon, IconProps } from '../Icon'

export function messageOutgoing01Icon({ iconName = "message-outgoing01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}