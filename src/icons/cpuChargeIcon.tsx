import React from 'react'
import { Icon, IconProps } from '../Icon'

export function cpuChargeIcon({ iconName = "cpu-charge", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}