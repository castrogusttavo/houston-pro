import React from 'react'
import { Icon, IconProps } from '../Icon'

export function News01Icon({ iconName = 'news01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
