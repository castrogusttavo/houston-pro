import React from 'react'
import { Icon, IconProps } from '../Icon'

export function paintBrush01Icon({ iconName = "paint-brush01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}