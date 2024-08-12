import React from 'react'
import { Icon, IconProps } from '../Icon'

export function video01Icon({ iconName = "video01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}