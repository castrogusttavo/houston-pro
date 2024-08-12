import React from 'react'
import { Icon, IconProps } from '../Icon'

export function rulerIcon({ iconName = "ruler", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}