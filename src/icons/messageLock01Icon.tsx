import React from 'react'
import { Icon, IconProps } from '../Icon'

export function messageLock01Icon({ iconName = "message-lock01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}