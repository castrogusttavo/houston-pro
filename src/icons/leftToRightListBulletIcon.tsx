import React from 'react'
import { Icon, IconProps } from '../Icon'

export function leftToRightListBulletIcon({ iconName = "left-to-right-list-bullet", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}