import React from 'react';
import Link from '@docusaurus/Link';

import SectionLayout from './SectionLayout';

const DeveloperCommunitySection = () => {
  return (
    <SectionLayout
      title="Join our developer community"
      description={`Open-source is in the ❤ of Reality World.\n⭐ us on GitHub, and join our developer security community 🗣️ on Discord!`}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          flexWrap: 'wrap',
        }}
      >
        <Link
          href="https://github.com/Cogine/RealityWorld"
          className="button button--primary button--outline"
        >
          Star on GitHub
        </Link>
        <Link
          href="https://discord.https://realityworld.com/"
          className="button button--primary button--outline"
        >
          Join Discord
        </Link>
      </div>
    </SectionLayout>
  );
};

export default DeveloperCommunitySection;
