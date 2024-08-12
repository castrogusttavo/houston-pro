import React from 'react'
import { Icon, IconProps } from '../Icon'

export function dashedLine01Icon({ iconName = "dashed-line01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}