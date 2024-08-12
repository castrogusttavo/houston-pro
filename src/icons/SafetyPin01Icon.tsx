import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SafetyPin01Icon({ iconName = "safety-pin01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}