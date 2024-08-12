import React from 'react'
import { Icon, IconProps } from '../Icon'

export function tradeMarkIcon({ iconName = "trade-mark", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}