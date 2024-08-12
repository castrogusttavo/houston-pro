import React from 'react'
import { Icon, IconProps } from '../Icon'

export function sushi01Icon({ iconName = "sushi01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}