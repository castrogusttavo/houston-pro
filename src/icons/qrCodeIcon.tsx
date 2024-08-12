import React from 'react'
import { Icon, IconProps } from '../Icon'

export function qrCodeIcon({ iconName = "qr-code", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}