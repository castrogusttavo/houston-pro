import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CallMissed02Icon({
  iconName = 'call-missed02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
