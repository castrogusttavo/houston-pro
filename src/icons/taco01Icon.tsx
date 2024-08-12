import React from 'react'
import { Icon, IconProps } from '../Icon'

export function taco01Icon({ iconName = "taco01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}