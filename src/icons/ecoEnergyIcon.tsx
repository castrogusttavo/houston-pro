import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ecoEnergyIcon({ iconName = "eco-energy", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}