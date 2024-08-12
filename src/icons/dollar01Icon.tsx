import React from 'react'
import { Icon, IconProps } from '../Icon'

export function dollar01Icon({ iconName = "dollar01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}