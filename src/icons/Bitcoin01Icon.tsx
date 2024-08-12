import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Bitcoin01Icon({ iconName = "bitcoin01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}