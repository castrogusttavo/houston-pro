import React from 'react'
import { Icon, IconProps } from '../Icon'

export function coffee01Icon({ iconName = "coffee01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}