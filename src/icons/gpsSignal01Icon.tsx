import React from 'react'
import { Icon, IconProps } from '../Icon'

export function gpsSignal01Icon({ iconName = "gps-signal01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}