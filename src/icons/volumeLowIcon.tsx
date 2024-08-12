import React from 'react'
import { Icon, IconProps } from '../Icon'

export function volumeLowIcon({ iconName = "volume-low", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}