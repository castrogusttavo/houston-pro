import React from 'react'
import { Icon, IconProps } from '../Icon'

export function coinsEuroIcon({ iconName = "coins-euro", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}