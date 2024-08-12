import React from 'react'
import { Icon, IconProps } from '../Icon'

export function starIcon({ iconName = "star", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}