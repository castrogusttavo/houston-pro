import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ambulanceIcon({ iconName = "ambulance", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}