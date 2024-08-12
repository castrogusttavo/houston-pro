import React from 'react'
import { Icon, IconProps } from '../Icon'

export function usbBugsIcon({ iconName = "usb-bugs", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}