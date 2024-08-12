import React from 'react'
import { Icon, IconProps } from '../Icon'

export function calculator01Icon({ iconName = "calculator01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}