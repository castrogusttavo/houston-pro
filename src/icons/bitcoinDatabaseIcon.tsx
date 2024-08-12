import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bitcoinDatabaseIcon({ iconName = "bitcoin-database", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}