import React from 'react'
import { Icon, IconProps } from '../Icon'

export function radio01Icon({ iconName = "radio01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}