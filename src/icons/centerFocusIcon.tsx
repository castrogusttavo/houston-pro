import React from 'react'
import { Icon, IconProps } from '../Icon'

export function centerFocusIcon({ iconName = "center-focus", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}