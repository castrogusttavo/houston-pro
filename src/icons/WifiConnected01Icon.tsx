import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WifiConnected01Icon({
  iconName = 'wifi-connected01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
