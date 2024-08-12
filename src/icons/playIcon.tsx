import React from 'react'
import { Icon, IconProps } from '../Icon'

export function playIcon({ iconName = "play", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}