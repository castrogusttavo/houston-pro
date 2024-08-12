import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UsbNotConnected02Icon({
  iconName = 'usb-not-connected02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
