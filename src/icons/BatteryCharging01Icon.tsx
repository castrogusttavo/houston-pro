import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BatteryCharging01Icon({ iconName = "battery-charging01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}