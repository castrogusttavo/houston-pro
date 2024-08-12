import React from 'react'
import { Icon, IconProps } from '../Icon'

export function message01Icon({ iconName = "message01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}