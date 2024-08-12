import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bitcoinPresentationIcon({ iconName = "bitcoin-presentation", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}