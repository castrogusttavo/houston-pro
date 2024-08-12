import React from 'react'
import { Icon, IconProps } from '../Icon'

export function remoteControlIcon({ iconName = "remote-control", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}