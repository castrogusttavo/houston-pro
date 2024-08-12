import React from 'react'
import { Icon, IconProps } from '../Icon'

export function sqlIcon({ iconName = "sql", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}