import React from 'react'
import { Icon, IconProps } from '../Icon'

export function png01Icon({ iconName = "png01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}