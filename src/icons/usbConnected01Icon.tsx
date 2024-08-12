import React from 'react'
import { Icon, IconProps } from '../Icon'

export function usbConnected01Icon({ iconName = "usb-connected01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}