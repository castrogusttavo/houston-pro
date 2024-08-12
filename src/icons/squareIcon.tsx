import React from 'react'
import { Icon, IconProps } from '../Icon'

export function squareIcon({ iconName = "square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}