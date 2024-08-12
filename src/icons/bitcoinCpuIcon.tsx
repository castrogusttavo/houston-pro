import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bitcoinCpuIcon({ iconName = "bitcoin-cpu", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}