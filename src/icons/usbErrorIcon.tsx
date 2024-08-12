import React from 'react'
import { Icon, IconProps } from '../Icon'

export function usbErrorIcon({ iconName = "usb-error", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}