import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UserBlock02Icon({
  iconName = 'user-block02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
