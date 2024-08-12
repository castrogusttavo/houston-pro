import React from 'react'
import { Icon, IconProps } from '../Icon'

export function scooterElectricIcon({ iconName = "scooter-electric", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}