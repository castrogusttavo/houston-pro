import React from 'react'
import { Icon, IconProps } from '../Icon'

export function navigation01Icon({ iconName = "navigation01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}