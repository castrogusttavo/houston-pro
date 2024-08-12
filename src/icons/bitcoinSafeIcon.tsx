import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bitcoinSafeIcon({ iconName = "bitcoin-safe", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}