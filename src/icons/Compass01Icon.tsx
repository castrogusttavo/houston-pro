import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Compass01Icon({ iconName = "compass01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}