import React from 'react'
import { Icon, IconProps } from '../Icon'

export function batteriesEnergyIcon({ iconName = "batteries-energy", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}