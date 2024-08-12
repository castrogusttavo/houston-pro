import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bitcoinUp01Icon({ iconName = "bitcoin-up01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}