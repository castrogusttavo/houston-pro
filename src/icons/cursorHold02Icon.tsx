import React from 'react'
import { Icon, IconProps } from '../Icon'

export function cursorHold02Icon({ iconName = "cursor-hold02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}