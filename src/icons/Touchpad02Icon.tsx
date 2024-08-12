import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Touchpad02Icon({
  iconName = 'touchpad02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
