import React from 'react'
import { Icon, IconProps } from '../Icon'

export function raw01Icon({ iconName = "raw01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}