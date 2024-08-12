import React from 'react'
import { Icon, IconProps } from '../Icon'

export function electricWireIcon({ iconName = "electric-wire", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}