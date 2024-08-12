import React from 'react'
import { Icon, IconProps } from '../Icon'

export function filterRemoveIcon({ iconName = "filter-remove", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}