import React from 'react'
import { Icon, IconProps } from '../Icon'

export function playCircleIcon({ iconName = "play-circle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}