import React from 'react'
import { Icon, IconProps } from '../Icon'

export function coinsYenIcon({ iconName = "coins-yen", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}