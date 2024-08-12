import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UsbMemory01Icon({
  iconName = 'usb-memory01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
