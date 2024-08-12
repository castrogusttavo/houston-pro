import React from 'react'
import { Icon, IconProps } from '../Icon'

export function waterPumpIcon({ iconName = "water-pump", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}