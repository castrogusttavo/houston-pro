import React from 'react'
import { Icon, IconProps } from '../Icon'

export function More01Icon({ iconName = 'more01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
