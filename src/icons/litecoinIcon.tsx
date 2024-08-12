import React from 'react'
import { Icon, IconProps } from '../Icon'

export function litecoinIcon({ iconName = "litecoin", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}