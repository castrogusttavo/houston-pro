import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SquareArrowHorizontalIcon({
  iconName = 'square-arrow-horizontal',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
