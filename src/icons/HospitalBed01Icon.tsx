import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HospitalBed01Icon({
  iconName = 'hospital-bed01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
