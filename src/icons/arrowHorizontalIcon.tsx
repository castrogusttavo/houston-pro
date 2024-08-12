import React from 'react'
import { Icon, IconProps } from '../Icon'

export function arrowHorizontalIcon({ iconName = "arrow-horizontal", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}