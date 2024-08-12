import React from 'react'
import { Icon, IconProps } from '../Icon'

export function testTubeIcon({ iconName = "test-tube", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}