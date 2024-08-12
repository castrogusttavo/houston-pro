import React from 'react'
import { Icon, IconProps } from '../Icon'

export function arrangeIcon({ iconName = "arrange", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}