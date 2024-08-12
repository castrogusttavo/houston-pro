import React from 'react'
import { Icon, IconProps } from '../Icon'

export function droneIcon({ iconName = "drone", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}