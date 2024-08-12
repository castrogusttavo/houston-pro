import React from 'react'
import { Icon, IconProps } from '../Icon'

export function maximize01Icon({ iconName = "maximize01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}