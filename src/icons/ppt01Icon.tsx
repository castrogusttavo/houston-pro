import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ppt01Icon({ iconName = "ppt01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}