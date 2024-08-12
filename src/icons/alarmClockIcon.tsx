import React from 'react'
import { Icon, IconProps } from '../Icon'

export function alarmClockIcon({ iconName = "alarm-clock", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}