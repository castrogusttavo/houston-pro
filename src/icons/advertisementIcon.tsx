import React from 'react'
import { Icon, IconProps } from '../Icon'

export function advertisementIcon({ iconName = "advertisement", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}