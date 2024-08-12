import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Message01Icon({ iconName = 'message01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
