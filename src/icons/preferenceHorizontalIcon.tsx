import React from 'react'
import { Icon, IconProps } from '../Icon'

export function preferenceHorizontalIcon({ iconName = "preference-horizontal", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}