import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Jpg01Icon({ iconName = "jpg01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}