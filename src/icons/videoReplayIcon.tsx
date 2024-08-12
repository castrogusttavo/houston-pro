import React from 'react'
import { Icon, IconProps } from '../Icon'

export function videoReplayIcon({ iconName = "video-replay", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}