import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Search01Icon({ iconName = 'search01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
