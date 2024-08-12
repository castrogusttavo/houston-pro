import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bioEnergyIcon({ iconName = "bio-energy", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}