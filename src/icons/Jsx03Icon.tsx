import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Jsx03Icon({ iconName = 'jsx03', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
