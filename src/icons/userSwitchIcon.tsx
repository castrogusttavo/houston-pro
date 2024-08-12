import React from 'react'
import { Icon, IconProps } from '../Icon'

export function userSwitchIcon({ iconName = "user-switch", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}