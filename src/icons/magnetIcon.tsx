import React from 'react'
import { Icon, IconProps } from '../Icon'

export function magnetIcon({ iconName = "magnet", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}