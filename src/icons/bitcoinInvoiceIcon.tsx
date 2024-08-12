import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bitcoinInvoiceIcon({ iconName = "bitcoin-invoice", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}