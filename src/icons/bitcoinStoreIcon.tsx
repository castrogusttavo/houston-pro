import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bitcoinStoreIcon({ iconName = "bitcoin-store", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}