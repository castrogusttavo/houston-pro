import React from 'react'
import { Icon, IconProps } from '../Icon'

export function packageOutOfStockIcon({ iconName = "package-out-of-stock", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}