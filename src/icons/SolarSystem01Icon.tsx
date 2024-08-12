import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SolarSystem01Icon({
  iconName = 'solar-system01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
