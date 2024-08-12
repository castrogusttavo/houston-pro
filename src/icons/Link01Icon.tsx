import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Link01Icon({ iconName = 'link01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
