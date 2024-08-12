import React from 'react'
import { Icon, IconProps } from '../Icon'

export function printerIcon({ iconName = "printer", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}