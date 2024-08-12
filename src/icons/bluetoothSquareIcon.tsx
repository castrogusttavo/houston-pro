import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bluetoothSquareIcon({ iconName = "bluetooth-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}