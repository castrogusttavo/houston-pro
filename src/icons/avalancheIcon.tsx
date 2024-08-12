import React from 'react'
import { Icon, IconProps } from '../Icon'

export function avalancheIcon({ iconName = "avalanche", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}