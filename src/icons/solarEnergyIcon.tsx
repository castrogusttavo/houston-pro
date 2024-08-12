import React from 'react'
import { Icon, IconProps } from '../Icon'

export function solarEnergyIcon({ iconName = "solar-energy", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}