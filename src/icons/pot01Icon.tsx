import React from 'react'
import { Icon, IconProps } from '../Icon'

export function pot01Icon({ iconName = "pot01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}