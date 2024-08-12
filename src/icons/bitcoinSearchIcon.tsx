import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bitcoinSearchIcon({ iconName = "bitcoin-search", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}