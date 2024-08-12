import React from 'react'
import { Icon, IconProps } from '../Icon'

export function timer01Icon({ iconName = "timer01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}