import React from 'react'
import { Icon, IconProps } from '../Icon'

export function irisScanIcon({ iconName = "iris-scan", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}