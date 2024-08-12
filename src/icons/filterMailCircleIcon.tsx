import React from 'react'
import { Icon, IconProps } from '../Icon'

export function filterMailCircleIcon({ iconName = "filter-mail-circle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}