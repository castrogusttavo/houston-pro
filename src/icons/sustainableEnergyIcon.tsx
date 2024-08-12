import React from 'react'
import { Icon, IconProps } from '../Icon'

export function sustainableEnergyIcon({ iconName = "sustainable-energy", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}