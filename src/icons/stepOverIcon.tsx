import React from 'react'
import { Icon, IconProps } from '../Icon'

export function stepOverIcon({ iconName = "step-over", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}