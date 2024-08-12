import React from 'react'
import { Icon, IconProps } from '../Icon'

export function golfHoleIcon({ iconName = "golf-hole", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}