import React from 'react'
import { Icon, IconProps } from '../Icon'

export function transitionTopIcon({ iconName = "transition-top", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}