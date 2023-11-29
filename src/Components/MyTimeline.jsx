import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

export default function MyTimeline({items}) {
    return (
        <>

            <Timeline
                position="alternate"
                sx ={{
                    marginTop: '5em'
                }}
            >
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="h6"
                        color="primary"
                    >
                        {items[0].timelineYears}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector/>
                        <TimelineDot color = "secondary">
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{
                        py: '12px', px: 2
                    }}>
                        <Typography
                            variant="h5"
                            fontWeight={"bold"}
                        >
                            {items[0].timelineTitle}
                        </Typography>

                        <Typography
                            sx = {{
                                marginTop: '0.5em',
                            }}
                            variant = "h6"
                            fontWeight={"bold"}
                        >
                            {items[0].timelineSubtitle}
                        </Typography>

                        <Typography
                            sx = {{
                                marginTop: '0.5em',
                            }}
                        >
                            {items[0].timelineText}
                        </Typography>
                    </TimelineContent>
                </TimelineItem>


                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="h6"
                        color="primary"
                    >
                        {items[1].timelineYears}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector/>
                        <TimelineDot color = "secondary">
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{
                        py: '12px', px: 2
                    }}>
                        <Typography
                            variant="h5"
                            fontWeight={"bold"}
                        >
                            {items[1].timelineTitle}
                        </Typography>

                        <Typography
                            sx = {{
                                marginTop: '0.5em',
                            }}
                            variant = "h6"
                            fontWeight={"bold"}
                        >
                            {items[1].timelineSubtitle}
                        </Typography>

                        <Typography
                            sx = {{
                                marginTop: '0.5em',
                            }}
                        >
                            {items[1].timelineText}
                        </Typography>
                    </TimelineContent>
                </TimelineItem>


                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="h6"
                        color="primary"
                    >
                        {items[2].timelineYears}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector/>
                        <TimelineDot color = "secondary">
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{
                        py: '12px', px: 2
                    }}>
                        <Typography
                            variant="h5"
                            fontWeight={"bold"}
                        >
                            {items[2].timelineTitle}
                        </Typography>

                        <Typography
                            sx = {{
                                marginTop: '0.5em',
                            }}
                            variant = "h6"
                            fontWeight={"bold"}
                        >
                            {items[2].timelineSubtitle}
                        </Typography>

                        <Typography
                            sx = {{
                                marginTop: '0.5em',
                            }}
                        >
                            {items[2].timelineText}
                        </Typography>
                    </TimelineContent>
                </TimelineItem>


                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="h6"
                        color="primary"
                    >
                        {items[3].timelineYears}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector/>
                        <TimelineDot color = "TimelineSecondary">
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{
                        py: '12px', px: 2
                    }}>
                        <Typography
                            variant="h5"
                            fontWeight={"bold"}
                        >
                            {items[3].timelineTitle}
                        </Typography>

                        <Typography
                            sx = {{
                                marginTop: '0.5em',
                            }}
                            variant = "h6"
                            fontWeight={"bold"}
                        >
                            {items[3].timelineSubtitle}
                        </Typography>

                        <Typography
                            sx = {{
                                marginTop: '0.5em',
                            }}
                        >
                            {items[3].timelineText}
                        </Typography>
                    </TimelineContent>
                </TimelineItem>


                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="h6"
                        color="primary"
                    >
                        {items[4].timelineYears}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector/>
                        <TimelineDot color = "TimelineSecondary">
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{
                        py: '12px', px: 2
                    }}>
                        <Typography
                            variant="h5"
                            fontWeight={"bold"}
                        >
                            {items[4].timelineTitle}
                        </Typography>

                        <Typography
                            sx = {{
                                marginTop: '0.5em',
                            }}
                            variant = "h6"
                            fontWeight={"bold"}
                        >
                            {items[4].timelineSubtitle}
                        </Typography>

                        <Typography
                            sx = {{
                                marginTop: '0.5em',
                            }}
                        >
                            {items[4].timelineText}
                        </Typography>
                    </TimelineContent>
                </TimelineItem>


            </Timeline>
        </>
    );
}
