import React from 'react'
import { Icon, IconProps } from '../Icon'

export function gridTableIcon({ iconName = "grid-table", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}