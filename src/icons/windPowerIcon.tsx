import React from 'react'
import { Icon, IconProps } from '../Icon'

export function windPowerIcon({ iconName = "wind-power", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}