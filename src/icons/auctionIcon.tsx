import React from 'react'
import { Icon, IconProps } from '../Icon'

export function auctionIcon({ iconName = "auction", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}