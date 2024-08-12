import React from 'react'
import { Icon, IconProps } from '../Icon'

export function searchVisualIcon({ iconName = "search-visual", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}