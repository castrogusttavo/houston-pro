import React from 'react'
import { Icon, IconProps } from '../Icon'

export function diningTableIcon({ iconName = "dining-table", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}