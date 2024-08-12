import React from 'react'
import { Icon, IconProps } from '../Icon'

export function task01Icon({ iconName = "task01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}