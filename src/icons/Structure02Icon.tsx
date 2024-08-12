import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Structure02Icon({
  iconName = 'structure02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
