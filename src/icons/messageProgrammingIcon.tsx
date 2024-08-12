import React from 'react'
import { Icon, IconProps } from '../Icon'

export function messageProgrammingIcon({ iconName = "message-programming", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}