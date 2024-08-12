import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Honey01Icon({ iconName = "honey01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}