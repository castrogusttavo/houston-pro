import React from 'react'
import { Icon, IconProps } from '../Icon'

export function hijabIcon({ iconName = "hijab", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}