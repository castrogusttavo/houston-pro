import React from 'react'
import { Icon, IconProps } from '../Icon'

export function evChargingIcon({ iconName = "ev-charging", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}