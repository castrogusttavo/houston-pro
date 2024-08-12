import React from 'react'
import { Icon, IconProps } from '../Icon'

export function greenHouseIcon({ iconName = "green-house", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}