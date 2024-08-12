import React from 'react'
import { Icon, IconProps } from '../Icon'

export function flowSquareIcon({ iconName = "flow-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}