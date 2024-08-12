import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FirstBrecketCircleIcon({
  iconName = 'first-brecket-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
