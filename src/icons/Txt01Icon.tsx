import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Txt01Icon({ iconName = 'txt01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
