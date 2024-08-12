import React from 'react'
import { Icon, IconProps } from '../Icon'

export function stepIntoIcon({ iconName = "step-into", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}