import React from 'react'
import { Icon, IconProps } from '../Icon'

export function usbNotConnected01Icon({ iconName = "usb-not-connected01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}