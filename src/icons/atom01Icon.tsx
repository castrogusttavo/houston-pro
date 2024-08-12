import React from 'react'
import { Icon, IconProps } from '../Icon'

export function atom01Icon({ iconName = "atom01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}