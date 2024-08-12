import React from 'react'
import { Icon, IconProps } from '../Icon'

export function root01Icon({ iconName = "root01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}