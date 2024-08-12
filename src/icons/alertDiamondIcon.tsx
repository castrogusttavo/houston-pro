import React from 'react'
import { Icon, IconProps } from '../Icon'

export function alertDiamondIcon({ iconName = "alert-diamond", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}