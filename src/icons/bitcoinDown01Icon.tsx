import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bitcoinDown01Icon({ iconName = "bitcoin-down01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}