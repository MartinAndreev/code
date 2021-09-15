import React, { FC } from 'react'

import { Box, Typography } from '@material-ui/core'

import { InterestTypes } from '@acter/components/interests/interest-types'
import { Size } from '@acter/lib/constants'
import {
  getSelectedTopLevelTypes,
  getSelectedInterests,
} from '@acter/lib/interests'
import { capitalize } from '@acter/lib/string/capitalize'
import { InterestType, Interest } from '@acter/schema'

export interface InterestsSectionProps {
  interestTypes: InterestType[]
  selected?: Interest[]
}

export const InterestsSection: FC<InterestsSectionProps> = (props) => {
  const { interestTypes, selected } = props
  const typesWithSelectedInterests = getSelectedInterests(
    interestTypes,
    selected
  )
  const selectedTopLevel = getSelectedTopLevelTypes(
    typesWithSelectedInterests,
    selected
  )

  return (
    <Box style={{ display: 'flex' }}>
      {selectedTopLevel.map((type) => (
        <Box key={type.id} role="list">
          <Typography
            id="interest-type-name"
            variant="body2"
            style={{ marginLeft: 4, fontWeight: 600 }}
          >
            {capitalize(type.name)}
          </Typography>
          <InterestTypes
            type={type}
            chipSize={Size.SMALL}
            allTypes={typesWithSelectedInterests}
            onSelectedInterestsChange={() => null}
            columns={true}
            showSubTypeTitles={false}
          />
        </Box>
      ))}
    </Box>
  )
}
