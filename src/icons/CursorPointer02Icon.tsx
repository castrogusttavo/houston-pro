import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CursorPointer02Icon({
  iconName = 'cursor-pointer02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
