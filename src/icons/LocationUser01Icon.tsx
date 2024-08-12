import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LocationUser01Icon({
  iconName = 'location-user01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
