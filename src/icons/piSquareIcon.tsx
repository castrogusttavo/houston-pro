import React from 'react'
import { Icon, IconProps } from '../Icon'

export function piSquareIcon({ iconName = "pi-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}