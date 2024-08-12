import React from 'react'
import { Icon, IconProps } from '../Icon'

export function judgeIcon({ iconName = "judge", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}