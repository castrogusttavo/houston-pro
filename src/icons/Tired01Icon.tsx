import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Tired01Icon({ iconName = "tired01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}