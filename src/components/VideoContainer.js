import React from 'react';

import Translate, { translate } from '@docusaurus/Translate';

const VideoContainer = () => {
    return (
        <div className="container text--center margin-bottom--xl">
            <div className="row">
                <div className="col">
                    <h2>
                        <Translate>Reality World Open Source Conference</Translate>
                    </h2>
                    <div style={{alignItems:'center'
                    }}>
                        <iframe width="900" height="510" src="//player.bilibili.com/player.html?aid=920051865&bvid=BV1pu4y1n7an&cid=1308801283&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoContainer;