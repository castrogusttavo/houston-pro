import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Notebook01Icon({ iconName = "notebook01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}