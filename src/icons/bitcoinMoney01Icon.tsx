import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bitcoinMoney01Icon({ iconName = "bitcoin-money01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}