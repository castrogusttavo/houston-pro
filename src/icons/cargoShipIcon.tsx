import React from 'react'
import { Icon, IconProps } from '../Icon'

export function cargoShipIcon({ iconName = "cargo-ship", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}