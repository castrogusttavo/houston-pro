import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Maximize02Icon({
  iconName = 'maximize02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
