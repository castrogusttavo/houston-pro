import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bitcoinReceiptIcon({ iconName = "bitcoin-receipt", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}