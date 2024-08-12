import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Remove01Icon({ iconName = "remove01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}