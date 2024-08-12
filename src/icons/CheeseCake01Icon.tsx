import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CheeseCake01Icon({
  iconName = 'cheese-cake01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
