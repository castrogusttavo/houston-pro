import React from 'react'
import { Icon, IconProps } from '../Icon'

export function pinIcon({ iconName = "pin", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}