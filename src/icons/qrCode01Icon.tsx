import React from 'react'
import { Icon, IconProps } from '../Icon'

export function qrCode01Icon({ iconName = "qr-code01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}