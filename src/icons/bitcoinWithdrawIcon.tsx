import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bitcoinWithdrawIcon({ iconName = "bitcoin-withdraw", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}