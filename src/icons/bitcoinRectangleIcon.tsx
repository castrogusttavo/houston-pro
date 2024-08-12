import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bitcoinRectangleIcon({ iconName = "bitcoin-rectangle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}