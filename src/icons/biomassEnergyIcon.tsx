import React from 'react'
import { Icon, IconProps } from '../Icon'

export function biomassEnergyIcon({ iconName = "biomass-energy", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}