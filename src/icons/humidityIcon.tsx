import React from 'react'
import { Icon, IconProps } from '../Icon'

export function humidityIcon({ iconName = "humidity", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}