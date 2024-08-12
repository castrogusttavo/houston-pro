import React from 'react'
import { Icon, IconProps } from '../Icon'

export function searchSquareIcon({ iconName = "search-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}