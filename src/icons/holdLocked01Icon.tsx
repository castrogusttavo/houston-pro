import React from 'react'
import { Icon, IconProps } from '../Icon'

export function holdLocked01Icon({ iconName = "hold-locked01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}