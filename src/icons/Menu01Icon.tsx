import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Menu01Icon({ iconName = 'menu01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
