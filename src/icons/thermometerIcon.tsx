import React from 'react'
import { Icon, IconProps } from '../Icon'

export function thermometerIcon({ iconName = "thermometer", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}