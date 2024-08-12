import React from 'react'
import { Icon, IconProps } from '../Icon'

export function stampIcon({ iconName = "stamp", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}