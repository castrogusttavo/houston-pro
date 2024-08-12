import React from 'react'
import { Icon, IconProps } from '../Icon'

export function vintageClockIcon({ iconName = "vintage-clock", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}