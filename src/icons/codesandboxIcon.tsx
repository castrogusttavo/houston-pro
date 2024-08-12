import React from 'react'
import { Icon, IconProps } from '../Icon'

export function codesandboxIcon({ iconName = "codesandbox", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}