import React from 'react'
import { Icon, IconProps } from '../Icon'

export function filterEditIcon({ iconName = "filter-edit", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}