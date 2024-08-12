import React from 'react'
import { Icon, IconProps } from '../Icon'

export function digitalClockIcon({ iconName = "digital-clock", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}