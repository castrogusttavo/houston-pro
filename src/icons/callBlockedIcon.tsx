import React from 'react'
import { Icon, IconProps } from '../Icon'

export function callBlockedIcon({ iconName = "call-blocked", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}