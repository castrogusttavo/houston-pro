import React from 'react'
import { Icon, IconProps } from '../Icon'

export function solarSystemIcon({ iconName = "solar-system", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}