import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FirstBrecketIcon({
  iconName = 'first-brecket',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
