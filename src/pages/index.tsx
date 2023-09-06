import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import useBaseUrl, {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

function TopBanner() {
  return (
    <div className={styles.topBanner}>
      <div className={styles.topBannerTitle}>
        {'🎉\xa0'}
        <Link
          to="https://realityworld.com"
          className={styles.topBannerTitleText}>
          <Translate id="homepage.banner.launch.2.0">
            {'我们即将开源!️'}
          </Translate>
        </Link>
        {'\xa0🥳'}
      </div>
      <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
        <div style={{flex: 1, whiteSpace: 'nowrap'}}>
          <div className={styles.topBannerDescription}>
            包括框架代码、技术白皮书、以及十万字以上的技术文档
          </div>
        </div>
        <div
          style={{
            flexGrow: 1,
            flexShrink: 0,
            padding: '0.5rem',
            display: 'flex',
            justifyContent: 'center',
          }}>
        </div>
      </div>
    </div>
  );
}

function HeroBanner() {
  return (
    <div className={styles.hero} data-theme="dark">
      <div className={styles.heroInner}>
        <Heading as="h1" className={styles.heroProjectTagline}>
          <img
            alt={translate({message: 'Reality World'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/reality_world_logo.jpg')}
            width="320"
            height="320"
          />
          <span
            className={styles.heroTitleTextHtml}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: translate({
                id: 'homepage.hero.title',
                message:
                  'A <b>self-evolving</b> and <b>interoperable</b> system towards digital intelligence',
                description:
                  'Home page hero title, can contain simple html tags',
              }),
            }}
          />
        </Heading>
<br/>
<div data-theme="dark" className={styles.realityworldDescription}>Reality World是一个以互操作性为核心目标的分布式系统和架构，它的愿景是构造一个无边的数字世界，使得任何人都可以向这个系统动态创建新的子程序，这些子程序可以和其它子程序任意交互，这个系统可以像生物系统一样自我进化，从而通过复杂系统的机制涌现出更加智能、丰富和个性化的数字世界体验。</div>

        <div className={styles.indexCtas}>
          <Link className="button button--primary" to="/reality-world-paper">
            <Translate>Whitepaper</Translate>
          </Link>
          <Link className="button button--primary" to="/whitepaper">
            <Translate>Documentation</Translate>
          </Link>
          <span className={styles.indexCtasGitHubButtonWrapper}>
            <iframe
              className={styles.indexCtasGitHubButton}
              src="https://ghbtns.com/github-btn.html?user=cogine&amp;repo=realityworld&amp;type=star&amp;count=true&amp;size=large"
              width={160}
              height={30}
              title="Reality World"
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`A self-evolving and interoperable system towards digital intelligence`}
      description="Description will go into a meta tag in <head />">
      <main>
        <TopBanner/>
        <HeroBanner />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
