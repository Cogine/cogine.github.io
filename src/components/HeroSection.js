import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import SvgIcon from './SvgIcon';

const Icon3 = require('../../static/img/logo/reality-world.svg').default;

const HeroSection = ({
  title,
  description,
  image,
  buttons,
  icon = "null",
  imageWidth = '400px',
}) => {
  const Icon = icon;

  return (
    <div className="container center margin-vert--xl">
      <div className="center">
        <div className="text--center">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '150px',
            }}
          >
            <SvgIcon
              icon={Icon3}
              size={{ width: '150px', height: '150px' }}
            />
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'nowrap',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {Icon && <Icon style={{ width: '40px', height: '90px' }} />}
            <h1 className="hero__title">{title}</h1>
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'nowrap',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
          <p className='hero__subtitle'>
            Reality World is a multi-agent platform built with interoperability as its core,<br />in which a dynamic agent or program can be added and interoperated with all other agents. <br />It's like a complex system and emerges digital intelligence.    
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'nowrap',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
          <div className="intro__buttons margin-top--lg text--center">
            {buttons.map(({ href, title, className, onClick }, idx) =>
              onClick ? (
                <a
                  onClick={onClick}
                  className={clsx('button button--lg', className)}
                >
                  {title}
                </a>
              ) : (
                <Link
                  className={clsx('button button--lg', className)}
                  href={href}
                  key={idx}
                >
                  {title}
                </Link>
              )
            )}

          </div>

          </div>
        </div>
      </div>


    </div>
  );
};

export default HeroSection;
