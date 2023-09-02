import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '架构体系',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        我们提出一套面向未来数字世界的架构体系和方法论，包括清晰的设计目标、原则以及核心技术实现。
        它能够统一Web 3.0、元宇宙和大模型应用的一些底层技术逻辑，为未来的这些新型应用构建提供更清晰的开发思路。
      </>
    ),
  },
  {
    title: '详细设计文档',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        针对架构设计提供一种可行的方案及详细的技术架构细节，包括怎样通过对软件架构、编程语言与编译器、复杂系、以及区块链、
        元宇宙和大模型应用这些新型应用的特征分析形成这套架构体系的完整论证和思考过程。
      </>
    ),
  },
  {
    title: '核心代码实现',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        包含一个简洁的源代码实现，其中包含了该套架构体系的核心机制。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
