import React from 'react'
import { Icon, IconProps } from '../Icon'

export function tap01Icon({ iconName = "tap01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}