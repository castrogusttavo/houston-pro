import React from 'react'
import { Icon, IconProps } from '../Icon'

export function workoutSportIcon({ iconName = "workout-sport", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}