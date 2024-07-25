import React from 'react';
import StaticBanner from '../component/StaticBanner';
import WelcomeBanner from './../component/welcomeBanner';
import LinkShorten from '../component/LinkShorten';

export default function Home() {
    return (
        <div>
            <WelcomeBanner />
            <LinkShorten />
            <StaticBanner />
        </div>
    );
}