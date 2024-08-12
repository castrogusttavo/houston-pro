import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TestTube01Icon({
  iconName = 'test-tube01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
