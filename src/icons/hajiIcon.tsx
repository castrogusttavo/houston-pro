import React from 'react'
import { Icon, IconProps } from '../Icon'

export function hajiIcon({ iconName = "haji", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}