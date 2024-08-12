import React from 'react'
import { Icon, IconProps } from '../Icon'

export function coinsBitcoinIcon({ iconName = "coins-bitcoin", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}