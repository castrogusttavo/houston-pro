import React from 'react'
import { Icon, IconProps } from '../Icon'

export function timeQuarterIcon({ iconName = "time-quarter", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}