import React from 'react'
import { Icon, IconProps } from '../Icon'

export function flashOffIcon({ iconName = "flash-off", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}