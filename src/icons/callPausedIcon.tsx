import React from 'react'
import { Icon, IconProps } from '../Icon'

export function callPausedIcon({ iconName = "call-paused", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}