import React from 'react'
import { Icon, IconProps } from '../Icon'

export function temperatureIcon({ iconName = "temperature", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}