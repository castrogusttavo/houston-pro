import React from 'react'
import { Icon, IconProps } from '../Icon'

export function starCircleIcon({ iconName = "star-circle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}