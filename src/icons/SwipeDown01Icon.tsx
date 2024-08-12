import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SwipeDown01Icon({
  iconName = 'swipe-down01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
