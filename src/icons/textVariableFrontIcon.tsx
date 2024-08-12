import React from 'react'
import { Icon, IconProps } from '../Icon'

export function textVariableFrontIcon({ iconName = "text-variable-front", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}