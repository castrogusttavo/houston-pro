import React from 'react'
import { Icon, IconProps } from '../Icon'

export function playListMinusIcon({ iconName = "play-list-minus", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}