import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Apple01Icon({ iconName = "apple01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}