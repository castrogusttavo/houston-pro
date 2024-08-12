import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bitcoinFlashdiskIcon({ iconName = "bitcoin-flashdisk", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}