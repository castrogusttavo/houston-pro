import React from 'react'
import { Icon, IconProps } from '../Icon'

export function mic01Icon({ iconName = "mic01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}