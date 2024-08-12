import React from 'react'
import { Icon, IconProps } from '../Icon'

export function callRinging01Icon({ iconName = "call-ringing01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}