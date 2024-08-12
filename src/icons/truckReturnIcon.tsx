import React from 'react'
import { Icon, IconProps } from '../Icon'

export function truckReturnIcon({ iconName = "truck-return", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}