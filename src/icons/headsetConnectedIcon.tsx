import React from 'react'
import { Icon, IconProps } from '../Icon'

export function headsetConnectedIcon({ iconName = "headset-connected", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}