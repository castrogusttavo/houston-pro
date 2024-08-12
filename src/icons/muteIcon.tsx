import React from 'react'
import { Icon, IconProps } from '../Icon'

export function muteIcon({ iconName = "mute", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}