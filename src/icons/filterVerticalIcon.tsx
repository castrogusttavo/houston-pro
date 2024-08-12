import React from 'react'
import { Icon, IconProps } from '../Icon'

export function filterVerticalIcon({ iconName = "filter-vertical", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}