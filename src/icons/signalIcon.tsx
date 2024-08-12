import React from 'react'
import { Icon, IconProps } from '../Icon'

export function signalIcon({ iconName = "signal", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}