import React from 'react'
import { Icon, IconProps } from '../Icon'

export function searchRemoveIcon({ iconName = "search-remove", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}