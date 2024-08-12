import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Taco01Icon({ iconName = "taco01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}