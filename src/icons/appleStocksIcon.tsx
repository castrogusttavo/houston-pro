import React from 'react'
import { Icon, IconProps } from '../Icon'

export function appleStocksIcon({ iconName = "apple-stocks", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}