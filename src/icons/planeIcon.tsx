import React from 'react'
import { Icon, IconProps } from '../Icon'

export function planeIcon({ iconName = "plane", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}