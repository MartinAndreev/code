import React, { FC } from 'react'
import { Box, createStyles, withStyles, Theme } from '@material-ui/core'
import { Header } from 'src/components/acter/landing-page/info-section/header'
import { FollowersAvatars } from 'src/components/acter/followers-avatars'
import { InterestsSection } from 'src/components/interests/interests-section'
import { useRouter } from 'next/router'
import { Acter, InterestType } from '@schema'
import { acterAsUrl } from 'src/lib/acter/acter-as-url'
export interface InfoSectionProps {
  acter: Acter
  interestTypes: InterestType[]
}

export const InfoSection: FC<InfoSectionProps> = ({ acter, interestTypes }) => {
  const router = useRouter()
  const handleOnAvatarClick = () => router.push(`${acterAsUrl(acter)}/members`)

  return (
    <InfoSectionContainer>
      <Box>
        <Header title={acter.name} description={acter.description} />
      </Box>
      <Box>
        <InterestsSection
          interestTypes={interestTypes}
          selected={acter.ActerInterests?.map(({ Interest }) => Interest)}
        />
      </Box>
      <Box>
        <FollowersAvatars acter={acter} onAvatarClick={handleOnAvatarClick} />
      </Box>
    </InfoSectionContainer>
  )
}

const InfoSectionContainer = withStyles((theme: Theme) =>
  createStyles({
    root: {
      //TODO: make this reusable
      backgroundColor: theme.palette.background.paper,
      borderColor: theme.palette.divider,
      borderWidth: 'thin',
      borderStyle: 'solid',
      borderRadius: theme.spacing(1),
      padding: theme.spacing(2),
      '& > *': {
        marginBottom: theme.spacing(2),
      },
    },
  })
)(Box)
