import React from 'react'
import { Icon, IconProps } from '../Icon'

export function videoOffIcon({ iconName = "video-off", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}