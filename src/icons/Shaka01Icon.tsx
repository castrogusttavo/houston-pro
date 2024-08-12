import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Shaka01Icon({ iconName = 'shaka01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
