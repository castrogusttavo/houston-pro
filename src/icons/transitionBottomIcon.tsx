import React from 'react'
import { Icon, IconProps } from '../Icon'

export function transitionBottomIcon({ iconName = "transition-bottom", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}