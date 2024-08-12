import React from 'react'
import { Icon, IconProps } from '../Icon'

export function chartIcon({ iconName = "chart", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}