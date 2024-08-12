import React from 'react'
import { Icon, IconProps } from '../Icon'

export const safeIcon: React.FC<IconProps> = (props) => (
  <Icon {...props} iconName="safeicon" />
)
