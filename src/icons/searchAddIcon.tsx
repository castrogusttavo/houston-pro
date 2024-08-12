import React from 'react'
import { Icon, IconProps } from '../Icon'

export function searchAddIcon({ iconName = "search-add", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}