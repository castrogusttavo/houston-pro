import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bitcoinCreditCardIcon({ iconName = "bitcoin-credit-card", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}