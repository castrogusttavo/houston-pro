import React from 'react'
import { Icon, IconProps } from '../Icon'

export function hologramIcon({ iconName = "hologram", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}