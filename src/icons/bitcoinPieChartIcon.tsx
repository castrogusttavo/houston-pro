import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bitcoinPieChartIcon({ iconName = "bitcoin-pie-chart", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}