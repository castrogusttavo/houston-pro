import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Plug01Icon({ iconName = "plug01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}