import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TestTube03Icon({ iconName = "test-tube03", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}