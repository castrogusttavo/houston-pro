import React from 'react'
import { Icon, IconProps } from '../Icon'

export function refreshIcon({ iconName = "refresh", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}