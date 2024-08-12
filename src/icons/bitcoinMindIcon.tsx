import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bitcoinMindIcon({ iconName = "bitcoin-mind", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}