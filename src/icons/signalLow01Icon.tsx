import React from 'react'
import { Icon, IconProps } from '../Icon'

export function signalLow01Icon({ iconName = "signal-low01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}