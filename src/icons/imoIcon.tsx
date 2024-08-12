import React from 'react'
import { Icon, IconProps } from '../Icon'

export function imoIcon({ iconName = "imo", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}