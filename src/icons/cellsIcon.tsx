import React from 'react'
import { Icon, IconProps } from '../Icon'

export function cellsIcon({ iconName = "cells", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}