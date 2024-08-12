import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bicycle01Icon({ iconName = "bicycle01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}