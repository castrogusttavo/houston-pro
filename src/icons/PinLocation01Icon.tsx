import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PinLocation01Icon({
  iconName = 'pin-location01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
