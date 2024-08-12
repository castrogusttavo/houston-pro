import React from 'react'
import { Icon, IconProps } from '../Icon'

export function barCode01Icon({ iconName = "bar-code01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}