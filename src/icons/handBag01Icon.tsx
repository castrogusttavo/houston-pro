import React from 'react'
import { Icon, IconProps } from '../Icon'

export function handBag01Icon({ iconName = "hand-bag01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}