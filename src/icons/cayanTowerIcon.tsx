import React from 'react'
import { Icon, IconProps } from '../Icon'

export function cayanTowerIcon({ iconName = "cayan-tower", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}