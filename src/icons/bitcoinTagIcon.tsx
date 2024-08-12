import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bitcoinTagIcon({ iconName = "bitcoin-tag", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}