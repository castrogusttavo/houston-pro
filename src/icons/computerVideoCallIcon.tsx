import React from 'react'
import { Icon, IconProps } from '../Icon'

export function computerVideoCallIcon({ iconName = "computer-video-call", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}