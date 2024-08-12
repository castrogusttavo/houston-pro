import React from 'react'
import { Icon, IconProps } from '../Icon'

export function graduateMaleIcon({ iconName = "graduate-male", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}