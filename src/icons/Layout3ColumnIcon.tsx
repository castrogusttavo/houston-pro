import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Layout3ColumnIcon({ iconName = "layout3-column", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}