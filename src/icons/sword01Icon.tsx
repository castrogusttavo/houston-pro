import React from 'react'
import { Icon, IconProps } from '../Icon'

export function sword01Icon({ iconName = "sword01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}