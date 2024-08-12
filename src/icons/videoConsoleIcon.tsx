import React from 'react'
import { Icon, IconProps } from '../Icon'

export function videoConsoleIcon({ iconName = "video-console", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}