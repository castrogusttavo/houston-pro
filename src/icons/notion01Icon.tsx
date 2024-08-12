import React from 'react'
import { Icon, IconProps } from '../Icon'

export function notion01Icon({ iconName = "notion01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}