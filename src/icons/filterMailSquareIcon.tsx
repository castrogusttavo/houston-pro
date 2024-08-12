import React from 'react'
import { Icon, IconProps } from '../Icon'

export function filterMailSquareIcon({ iconName = "filter-mail-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}