import React from 'react'
import { Icon, IconProps } from '../Icon'

export function penConnectUsbIcon({ iconName = "pen-connect-usb", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}