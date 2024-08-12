import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bitcoinCircleIcon({ iconName = "bitcoin-circle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}