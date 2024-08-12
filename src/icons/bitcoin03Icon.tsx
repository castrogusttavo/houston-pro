import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bitcoin03Icon({ iconName = "bitcoin03", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}