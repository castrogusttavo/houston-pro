import React from 'react'
import { Icon, IconProps } from '../Icon'

export function coinsSwapIcon({ iconName = "coins-swap", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}