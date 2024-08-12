import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Image01Icon({ iconName = "image01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}