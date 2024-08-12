import React from 'react'
import { Icon, IconProps } from '../Icon'

export function iceHockeyIcon({ iconName = "ice-hockey", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}