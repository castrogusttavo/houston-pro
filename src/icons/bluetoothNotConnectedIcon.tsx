import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bluetoothNotConnectedIcon({ iconName = "bluetooth-not-connected", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}