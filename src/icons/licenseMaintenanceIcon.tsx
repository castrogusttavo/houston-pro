import React from 'react'
import { Icon, IconProps } from '../Icon'

export function licenseMaintenanceIcon({ iconName = "license-maintenance", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}