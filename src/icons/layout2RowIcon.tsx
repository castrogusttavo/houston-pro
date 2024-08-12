import React from 'react'
import { Icon, IconProps } from '../Icon'

export function layout2RowIcon({ iconName = "layout2-row", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}