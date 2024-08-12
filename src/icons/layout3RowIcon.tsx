import React from 'react'
import { Icon, IconProps } from '../Icon'

export function layout3RowIcon({ iconName = "layout3-row", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}