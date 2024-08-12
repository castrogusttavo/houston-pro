import React from 'react'
import { Icon, IconProps } from '../Icon'

export function torriGateIcon({ iconName = "torri-gate", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}