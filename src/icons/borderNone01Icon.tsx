import React from 'react'
import { Icon, IconProps } from '../Icon'

export function borderNone01Icon({ iconName = "border-none01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}