import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bitcoinEyeIcon({ iconName = "bitcoin-eye", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}