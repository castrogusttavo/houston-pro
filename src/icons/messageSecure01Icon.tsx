import React from 'react'
import { Icon, IconProps } from '../Icon'

export function messageSecure01Icon({ iconName = "message-secure01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}