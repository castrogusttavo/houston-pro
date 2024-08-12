import React from 'react'
import { Icon, IconProps } from '../Icon'

export function waterEnergyIcon({ iconName = "water-energy", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}