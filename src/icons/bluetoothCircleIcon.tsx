import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bluetoothCircleIcon({ iconName = "bluetooth-circle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}