import React from 'react'
import { Icon, IconProps } from '../Icon'

export function metroIcon({ iconName = "metro", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}