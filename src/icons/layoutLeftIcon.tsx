import React from 'react'
import { Icon, IconProps } from '../Icon'

export function layoutLeftIcon({ iconName = "layout-left", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}