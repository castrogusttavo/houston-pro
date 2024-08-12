import React from 'react'
import { Icon, IconProps } from '../Icon'

export function suit01Icon({ iconName = "suit01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}