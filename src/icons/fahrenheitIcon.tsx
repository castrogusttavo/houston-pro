import React from 'react'
import { Icon, IconProps } from '../Icon'

export function fahrenheitIcon({ iconName = "fahrenheit", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}