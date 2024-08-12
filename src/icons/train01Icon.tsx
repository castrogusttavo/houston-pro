import React from 'react'
import { Icon, IconProps } from '../Icon'

export function train01Icon({ iconName = "train01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}