import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bluetoothIcon({ iconName = "bluetooth", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}