import React, { FC } from 'react'
import Image from 'next/image'
import { Modal } from 'src/components/util/modal'
import { Box, Grid, Hidden } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { ConnectProps } from 'src/components/acter/connect'
import { ActivityInfo } from 'src/components/activity/activity-info'
import { ActivityDescription } from 'src/components/activity/activity-description'
import { Participates } from 'src/components/activity/participates'
import { Organiser } from 'src/components/activity/organiser'
import { PostList, PostListProps } from 'src/components/posts'
import { InterestType } from '@schema'
import { getImageUrl } from 'src/lib/images/get-image-url'
import { useRouter } from 'next/router'

export interface ActivityDetailsProps extends ConnectProps, PostListProps {
  interestTypes: InterestType[]
}

export const ActivityDetails: FC<ActivityDetailsProps> = ({
  acter,
  interestTypes,
  user,
  posts,
  onJoin,
  onLeave,
  loading,
  onPostSubmit,
}) => {
  const classes = useStyles()

  const router = useRouter()

  return (
    <Modal
      handleModalClose={() => router.back()}
      actionButtons={['edit', 'delete']}
      acter={acter}
      user={user}
    >
      <Box className={classes.container}>
        <Box className={classes.imageContainer}>
          <Image
            src={getImageUrl(acter.bannerUrl, 'banner')}
            alt="Picture of activity"
            layout="responsive"
            width={600}
            height={200}
          />
        </Box>

        <ActivityInfo
          acter={acter}
          user={user}
          onJoin={onJoin}
          onLeave={onLeave}
          loading={loading}
        />

        <Grid container spacing={2} className={classes.content}>
          <Hidden smDown>
            <Grid item xs={12} sm={8}>
              <ActivityDescription
                acter={acter}
                interestTypes={interestTypes}
              />
            </Grid>
          </Hidden>

          <Grid item xs={12} sm={4}>
            <Participates acter={acter} />
            <Organiser acter={acter.Activity.Organiser} />
          </Grid>
        </Grid>

        <Hidden mdUp>
          <Grid item xs={12} sm={8}>
            <ActivityDescription acter={acter} interestTypes={interestTypes} />
          </Grid>
        </Hidden>

        <PostList
          user={user}
          acter={acter}
          posts={posts}
          onPostSubmit={onPostSubmit}
        />
      </Box>
    </Modal>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    backgroundColor: '#F2F2F2',
    width: 800,
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 700,
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: 310,
    },
    overflowY: 'scroll',
    marginBottom: 10,
  },
  imageContainer: {
    backgroundColor: 'white',
    overflow: 'hidden',
    objectFit: 'contain',
  },
  content: {
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  },
  membersContainer: {
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
    },
  },
}))
