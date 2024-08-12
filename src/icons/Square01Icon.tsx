import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Square01Icon({ iconName = 'square01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
