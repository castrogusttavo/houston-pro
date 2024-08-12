import React from 'react'
import { Icon, IconProps } from '../Icon'

export function layoutTopIcon({ iconName = "layout-top", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}