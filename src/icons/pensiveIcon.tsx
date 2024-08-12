import React from 'react'
import { Icon, IconProps } from '../Icon'

export function pensiveIcon({ iconName = "pensive", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}