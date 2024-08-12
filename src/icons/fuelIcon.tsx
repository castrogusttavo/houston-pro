import React from 'react'
import { Icon, IconProps } from '../Icon'

export function fuelIcon({ iconName = "fuel", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}