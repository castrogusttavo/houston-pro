import React from 'react'
import { Icon, IconProps } from '../Icon'

export function triangle01Icon({ iconName = "triangle01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}