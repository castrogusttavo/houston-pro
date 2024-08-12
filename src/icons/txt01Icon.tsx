import React from 'react'
import { Icon, IconProps } from '../Icon'

export function txt01Icon({ iconName = "txt01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}