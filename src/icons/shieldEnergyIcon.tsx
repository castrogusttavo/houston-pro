import React from 'react'
import { Icon, IconProps } from '../Icon'

export function shieldEnergyIcon({ iconName = "shield-energy", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}