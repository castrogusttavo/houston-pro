import React from 'react'
import { Icon, IconProps } from '../Icon'

export function backpack01Icon({ iconName = "backpack01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}