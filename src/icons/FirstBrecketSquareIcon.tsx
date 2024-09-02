import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FirstBrecketSquareIcon({
  iconName = 'first-brecket-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
