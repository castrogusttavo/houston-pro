import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Sine01Icon({ iconName = "sine01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}