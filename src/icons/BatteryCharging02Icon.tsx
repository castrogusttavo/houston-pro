import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BatteryCharging02Icon({
  iconName = 'battery-charging02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
