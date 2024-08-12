import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bridgeIcon({ iconName = "bridge", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}