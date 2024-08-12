import React from 'react'
import { Icon, IconProps } from '../Icon'

export function edit01Icon({ iconName = "edit01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}