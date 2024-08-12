import React from 'react'
import { Icon, IconProps } from '../Icon'

export function hospitalBed01Icon({ iconName = "hospital-bed01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}