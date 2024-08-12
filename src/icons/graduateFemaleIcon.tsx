import React from 'react'
import { Icon, IconProps } from '../Icon'

export function graduateFemaleIcon({ iconName = "graduate-female", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}