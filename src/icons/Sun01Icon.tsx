import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Sun01Icon({ iconName = "sun01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}