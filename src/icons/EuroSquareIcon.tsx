import React from 'react'
import { Icon, IconProps } from '../Icon'

export function EuroSquareIcon({ iconName = "euro-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}