import React from 'react'
import { Icon, IconProps } from '../Icon'

export function searchAreaIcon({ iconName = "search-area", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}