import React from 'react'
import { Icon, IconProps } from '../Icon'

export function exchange01Icon({ iconName = "exchange01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}