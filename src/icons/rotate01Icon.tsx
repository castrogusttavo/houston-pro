import React from 'react'
import { Icon, IconProps } from '../Icon'

export function rotate01Icon({ iconName = "rotate01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}