import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CircleArrowUpRightIcon({
  iconName = 'circle-arrow-up-right',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
