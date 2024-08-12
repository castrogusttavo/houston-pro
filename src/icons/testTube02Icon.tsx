import React from 'react'
import { Icon, IconProps } from '../Icon'

export function testTube02Icon({ iconName = "test-tube02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}