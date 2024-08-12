import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Passport01Icon({
  iconName = 'passport01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
