import React from 'react'
import { Icon, IconProps } from '../Icon'

export function stamp01Icon({ iconName = "stamp01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}