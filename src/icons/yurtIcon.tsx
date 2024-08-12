import React from 'react'
import { Icon, IconProps } from '../Icon'

export function yurtIcon({ iconName = "yurt", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}