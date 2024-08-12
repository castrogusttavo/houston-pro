import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bandageIcon({ iconName = "bandage", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}