import React from 'react'
import { Icon, IconProps } from '../Icon'

export function solidLine01Icon({ iconName = "solid-line01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}