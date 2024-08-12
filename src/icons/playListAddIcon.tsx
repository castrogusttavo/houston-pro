import React from 'react'
import { Icon, IconProps } from '../Icon'

export function playListAddIcon({ iconName = "play-list-add", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}