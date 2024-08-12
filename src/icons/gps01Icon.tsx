import React from 'react'
import { Icon, IconProps } from '../Icon'

export function gps01Icon({ iconName = "gps01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}