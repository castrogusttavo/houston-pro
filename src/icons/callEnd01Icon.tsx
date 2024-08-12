import React from 'react'
import { Icon, IconProps } from '../Icon'

export function callEnd01Icon({ iconName = "call-end01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}