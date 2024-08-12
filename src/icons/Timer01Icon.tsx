import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Timer01Icon({ iconName = "timer01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}