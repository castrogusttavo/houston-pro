import React from 'react'
import { Icon, IconProps } from '../Icon'

export function mushroom01Icon({ iconName = "mushroom01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}