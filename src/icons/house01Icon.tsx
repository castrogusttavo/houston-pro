import React from 'react'
import { Icon, IconProps } from '../Icon'

export function house01Icon({ iconName = "house01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}