import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bitcoinShoppingIcon({ iconName = "bitcoin-shopping", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}