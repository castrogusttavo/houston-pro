import React from 'react'
import { Icon, IconProps } from '../Icon'

export function nuclearPowerIcon({ iconName = "nuclear-power", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}