import React from 'react'
import { Icon, IconProps } from '../Icon'

export function layoutRightIcon({ iconName = "layout-right", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}