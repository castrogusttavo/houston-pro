import React from 'react'
import { Icon, IconProps } from '../Icon'

export function move01Icon({ iconName = "move01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}