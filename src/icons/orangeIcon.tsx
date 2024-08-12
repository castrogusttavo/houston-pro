import React from 'react'
import { Icon, IconProps } from '../Icon'

export function orangeIcon({ iconName = "orange", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}