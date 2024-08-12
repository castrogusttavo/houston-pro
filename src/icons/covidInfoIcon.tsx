import React from 'react'
import { Icon, IconProps } from '../Icon'

export function covidInfoIcon({ iconName = "covid-info", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}