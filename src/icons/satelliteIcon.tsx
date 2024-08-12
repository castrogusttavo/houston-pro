import React from 'react'
import { Icon, IconProps } from '../Icon'

export function satelliteIcon({ iconName = "satellite", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}