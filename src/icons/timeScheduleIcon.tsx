import React from 'react'
import { Icon, IconProps } from '../Icon'

export function timeScheduleIcon({ iconName = "time-schedule", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}