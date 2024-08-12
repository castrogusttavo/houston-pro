import React from 'react'
import { Icon, IconProps } from '../Icon'

export function tabletConnectedUsbIcon({ iconName = "tablet-connected-usb", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}