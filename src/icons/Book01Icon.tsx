import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Book01Icon({ iconName = "book01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}