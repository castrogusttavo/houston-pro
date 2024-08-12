import React from 'react'
import { Icon, IconProps } from '../Icon'

export function workoutStretchingIcon({ iconName = "workout-stretching", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}