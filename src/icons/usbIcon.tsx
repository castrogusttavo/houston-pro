import React from 'react'
import { Icon, IconProps } from '../Icon'

export function usbIcon({ iconName = "usb", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}