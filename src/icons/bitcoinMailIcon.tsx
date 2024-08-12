import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bitcoinMailIcon({ iconName = "bitcoin-mail", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}