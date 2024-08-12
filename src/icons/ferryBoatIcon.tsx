import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ferryBoatIcon({ iconName = "ferry-boat", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}