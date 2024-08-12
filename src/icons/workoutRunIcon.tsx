import React from 'react'
import { Icon, IconProps } from '../Icon'

export function workoutRunIcon({ iconName = "workout-run", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}