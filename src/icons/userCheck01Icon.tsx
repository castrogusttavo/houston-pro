import React from 'react'
import { Icon, IconProps } from '../Icon'

export function userCheck01Icon({ iconName = "user-check01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}