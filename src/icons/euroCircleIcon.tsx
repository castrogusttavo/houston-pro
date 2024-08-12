import React from 'react'
import { Icon, IconProps } from '../Icon'

export function euroCircleIcon({ iconName = "euro-circle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}