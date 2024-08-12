import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Airplane01Icon({ iconName = "airplane01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}