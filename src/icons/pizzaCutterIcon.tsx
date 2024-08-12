import React from 'react'
import { Icon, IconProps } from '../Icon'

export function pizzaCutterIcon({ iconName = "pizza-cutter", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}