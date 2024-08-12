import React from 'react'
import { Icon, IconProps } from '../Icon'

export function shirt01Icon({ iconName = "shirt01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}