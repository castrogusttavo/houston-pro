import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Comment01Icon({ iconName = 'comment01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
