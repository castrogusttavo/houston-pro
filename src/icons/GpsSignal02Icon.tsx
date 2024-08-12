import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GpsSignal02Icon({
  iconName = 'gps-signal02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
