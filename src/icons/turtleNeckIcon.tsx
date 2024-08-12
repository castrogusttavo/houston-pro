import React from 'react'
import { Icon, IconProps } from '../Icon'

export function turtleNeckIcon({ iconName = "turtle-neck", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}