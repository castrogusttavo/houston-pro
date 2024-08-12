import React from 'react'
import { Icon, IconProps } from '../Icon'

export function file01Icon({ iconName = "file01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}