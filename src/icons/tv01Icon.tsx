import React from 'react'
import { Icon, IconProps } from '../Icon'

export function tv01Icon({ iconName = "tv01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}