import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Stamp01Icon({ iconName = "stamp01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}