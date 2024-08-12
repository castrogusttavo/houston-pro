import React from 'react'
import { Icon, IconProps } from '../Icon'

export function pan01Icon({ iconName = "pan01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}