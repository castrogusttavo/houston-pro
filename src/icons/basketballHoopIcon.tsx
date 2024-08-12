import React from 'react'
import { Icon, IconProps } from '../Icon'

export function basketballHoopIcon({ iconName = "basketball-hoop", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}