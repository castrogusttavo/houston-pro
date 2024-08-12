import React from 'react'
import { Icon, IconProps } from '../Icon'

export function salahTimeIcon({ iconName = "salah-time", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}