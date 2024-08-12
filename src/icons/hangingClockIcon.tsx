import React from 'react'
import { Icon, IconProps } from '../Icon'

export function hangingClockIcon({ iconName = "hanging-clock", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}