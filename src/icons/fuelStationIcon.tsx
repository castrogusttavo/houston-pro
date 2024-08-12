import React from 'react'
import { Icon, IconProps } from '../Icon'

export function fuelStationIcon({ iconName = "fuel-station", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}