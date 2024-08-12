import React from 'react'
import { Icon, IconProps } from '../Icon'

export function printerOffIcon({ iconName = "printer-off", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}