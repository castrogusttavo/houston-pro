import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bitcoinLockIcon({ iconName = "bitcoin-lock", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}