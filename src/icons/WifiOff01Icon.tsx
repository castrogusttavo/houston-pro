import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WifiOff01Icon({
  iconName = 'wifi-off01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
