import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Layout2ColumnIcon({
  iconName = 'layout2-column',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
