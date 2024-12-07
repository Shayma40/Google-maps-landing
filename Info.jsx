import React from 'react';
import {Icon, InlineIcon } from '@iconify/react';

import mapMarkerRadiusOutline from '@iconify/icons-mdi/map-marker-radius-outline';
import phoneOutline from '@iconify/icons-mdi/phone-outline';
import emailMultipleOutline from '@iconify/icons-mdi/email-multiple-outline';

import facebook from '@iconify/icons-mdi/facebook';
import linkedin from '@iconify/icons-mdi/linkedin';
import twitter from '@iconify/icons-mdi/twitter';

import './Info.css';

const contactDetails = [
    {
        value: 'N° 40 Ave Habib Bourguiba, 2000',
        icon: mapMarkerRadiusOutline,
    },
    { value: '+216 33 225 645', icon: phoneOutline },
    { value: 'support@example.com', icon: emailMultipleOutline },
]

const renderContactDetails = () =>
    contactDetails.map(detail => (
        <p key={detail.value} className="info-detail">
            <InlineIcon icon={detail.icon} /> {detail.value}
        </p>
    ));

    const renderIcons = () =>
        [facebook, linkedin, twitter].map((icon, key) => (
            <Icon icon={icon} key={key} className="info-icon" />
        )
    );

    const Info = () => (
        <section className="info">
            <h2 className="info-h2">Contact information</h2>

            <div className="info-details-container">{renderContactDetails()}</div>

            <div className="info-icons-container">{renderIcons()}</div>
        </section>
    );

    export default Info;

