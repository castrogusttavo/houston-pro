import React from 'react'
import { Icon, IconProps } from '../Icon'

export function surpriseIcon({ iconName = "surprise", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}