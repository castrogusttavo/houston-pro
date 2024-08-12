import React from 'react'
import { Icon, IconProps } from '../Icon'

export function thermometerColdIcon({ iconName = "thermometer-cold", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}