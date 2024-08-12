import React from 'react'
import { Icon, IconProps } from '../Icon'

export function scissorIcon({ iconName = "scissor", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}