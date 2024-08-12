import React from 'react'
import { Icon, IconProps } from '../Icon'

export function euroSquareIcon({ iconName = "euro-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}