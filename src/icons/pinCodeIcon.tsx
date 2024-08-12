import React from 'react'
import { Icon, IconProps } from '../Icon'

export function pinCodeIcon({ iconName = "pin-code", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}