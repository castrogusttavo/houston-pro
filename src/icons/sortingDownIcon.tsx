import React from 'react'
import { Icon, IconProps } from '../Icon'

export function sortingDownIcon({ iconName = "sorting-down", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}