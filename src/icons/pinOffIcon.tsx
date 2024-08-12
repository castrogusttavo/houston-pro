import React from 'react'
import { Icon, IconProps } from '../Icon'

export function pinOffIcon({ iconName = "pin-off", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}