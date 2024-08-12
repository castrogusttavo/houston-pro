import React from 'react'
import { Icon, IconProps } from '../Icon'

export function brain01Icon({ iconName = "brain01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}