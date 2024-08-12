import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Calendar02Icon({
  iconName = 'calendar02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
