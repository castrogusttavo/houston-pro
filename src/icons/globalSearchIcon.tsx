import React from 'react'
import { Icon, IconProps } from '../Icon'

export function globalSearchIcon({ iconName = "global-search", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}