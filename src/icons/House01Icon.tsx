import React from 'react'
import { Icon, IconProps } from '../Icon'

export function House01Icon({ iconName = 'house01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
