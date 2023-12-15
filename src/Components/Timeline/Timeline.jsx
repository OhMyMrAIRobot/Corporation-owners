import React from 'react';
import { Chrono } from "react-chrono";
import './Timeline.css'

const Timeline = ({items}) => {

    const TimelineInfo = [];

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const timelineInfo = {
            title: item.timelineYears,
            cardTitle: item.timelineTitle,
            cardSubtitle: item.timelineSubtitle,
            cardDetailedText: item.timelineText,
        };
        TimelineInfo.push(timelineInfo);
    }

    return (
        <div
            className = 'TLContainer'
            style={{
                width: '100%',
                height: '700px',
            }}
        >
            <Chrono
                items = {TimelineInfo}

                fontSizes={{
                    cardSubtitle: '1.1rem',
                    title: '1.7rem',
                    cardTitle: '1.4rem',
                }}

                theme={{
                    primary: '#212121',
                    secondary: '',
                    cardBgColor: '#e0e0e0',
                    titleColor: '#212121',
                    titleColorActive: '#212121',
                    cardTitleColor: '#212121',
                }}

                classNames={{
                    cardSubTitle: 'my-card-subtitle',
                    cardText: 'my-card-text',
                    cardTitle: 'my-card-title',
                    title: 'my-title',
                }}

                mode="VERTICAL_ALTERNATING"
                allowDynamicUpdate={true}
            />
        </div>
    );
};

export default Timeline;