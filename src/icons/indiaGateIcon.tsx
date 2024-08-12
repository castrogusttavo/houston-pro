import React from 'react'
import { Icon, IconProps } from '../Icon'

export function indiaGateIcon({ iconName = "india-gate", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}