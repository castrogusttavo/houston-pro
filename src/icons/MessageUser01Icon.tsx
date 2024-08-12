import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MessageUser01Icon({ iconName = "message-user01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}