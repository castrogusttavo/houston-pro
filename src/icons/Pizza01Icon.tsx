import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Pizza01Icon({ iconName = 'pizza01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
