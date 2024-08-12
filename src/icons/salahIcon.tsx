import React from 'react'
import { Icon, IconProps } from '../Icon'

export function salahIcon({ iconName = "salah", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}