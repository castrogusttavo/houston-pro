import React from 'react'
import { Icon, IconProps } from '../Icon'

export function playListRemoveIcon({ iconName = "play-list-remove", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}