import React from 'react'
import { Icon, IconProps } from '../Icon'

export function workoutWarmUpIcon({ iconName = "workout-warm-up", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}