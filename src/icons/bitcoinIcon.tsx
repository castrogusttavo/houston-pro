import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bitcoinIcon({ iconName = "bitcoin", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}