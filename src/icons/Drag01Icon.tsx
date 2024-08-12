import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Drag01Icon({ iconName = "drag01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}