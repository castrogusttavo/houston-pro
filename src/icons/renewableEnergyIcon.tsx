import React from 'react'
import { Icon, IconProps } from '../Icon'

export function renewableEnergyIcon({ iconName = "renewable-energy", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}