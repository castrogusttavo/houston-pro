import React from 'react'
import { Icon, IconProps } from '../Icon'

export function searchCircleIcon({ iconName = "search-circle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}