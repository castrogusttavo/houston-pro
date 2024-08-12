import React from 'react'
import { Icon, IconProps } from '../Icon'

export function poolTableIcon({ iconName = "pool-table", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}