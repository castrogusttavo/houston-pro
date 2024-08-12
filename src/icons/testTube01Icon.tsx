import React from 'react'
import { Icon, IconProps } from '../Icon'

export function testTube01Icon({ iconName = "test-tube01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}