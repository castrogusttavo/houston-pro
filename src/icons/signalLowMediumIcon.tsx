import React from 'react'
import { Icon, IconProps } from '../Icon'

export function signalLowMediumIcon({ iconName = "signal-low-medium", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}