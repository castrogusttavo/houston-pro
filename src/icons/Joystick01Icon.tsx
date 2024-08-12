import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Joystick01Icon({ iconName = "joystick01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}