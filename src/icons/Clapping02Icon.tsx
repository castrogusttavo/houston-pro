import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Clapping02Icon({
  iconName = 'clapping02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
