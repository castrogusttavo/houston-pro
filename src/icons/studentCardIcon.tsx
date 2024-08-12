import React from 'react'
import { Icon, IconProps } from '../Icon'

export function studentCardIcon({ iconName = "student-card", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}