import React from 'react'
import { Icon, IconProps } from '../Icon'

export function profitIcon({ iconName = "profit", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}