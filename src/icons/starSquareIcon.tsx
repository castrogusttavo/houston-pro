import React from 'react'
import { Icon, IconProps } from '../Icon'

export function starSquareIcon({ iconName = "star-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}