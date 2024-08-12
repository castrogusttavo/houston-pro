import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bitcoinSquareIcon({ iconName = "bitcoin-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}