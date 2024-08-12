import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ufo01Icon({ iconName = "ufo01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}