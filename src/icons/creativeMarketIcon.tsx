import React from 'react'
import { Icon, IconProps } from '../Icon'

export function creativeMarketIcon({ iconName = "creative-market", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}