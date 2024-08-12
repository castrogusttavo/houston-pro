import React from 'react'
import { Icon, IconProps } from '../Icon'

export function copy01Icon({ iconName = "copy01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}