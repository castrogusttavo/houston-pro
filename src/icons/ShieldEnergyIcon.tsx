import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ShieldEnergyIcon({ iconName = "shield-energy", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}