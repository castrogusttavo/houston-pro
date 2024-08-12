import React from 'react'
import { Icon, IconProps } from '../Icon'

export function honey01Icon({ iconName = "honey01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}