import React from 'react'
import { Icon, IconProps } from '../Icon'

export function playSquareIcon({ iconName = "play-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}