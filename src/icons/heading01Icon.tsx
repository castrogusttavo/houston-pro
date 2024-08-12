import React from 'react'
import { Icon, IconProps } from '../Icon'

export function heading01Icon({ iconName = "heading01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}