import React from 'react'
import { Icon, IconProps } from '../Icon'

export function github01Icon({ iconName = "github01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}