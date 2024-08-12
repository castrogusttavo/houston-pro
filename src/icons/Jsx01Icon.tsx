import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Jsx01Icon({ iconName = "jsx01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}