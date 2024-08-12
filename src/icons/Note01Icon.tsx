import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Note01Icon({ iconName = 'note01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
