import React from 'react'
import { Icon, IconProps } from '../Icon'

export function dumbbell01Icon({ iconName = "dumbbell01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}