import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MapsLocation01Icon({
  iconName = 'maps-location01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
