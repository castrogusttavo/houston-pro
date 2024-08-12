import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bitcoin01Icon({ iconName = "bitcoin01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}