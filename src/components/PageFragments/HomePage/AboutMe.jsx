import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: `こんにちは！同志社大学理工学部インテリジェント情報工学科4年の橋本夏希です！`,
  paraTwo: `データサイエンス・データ分析・機械学習に興味があり、現在ソーシャルメディアデータの知識抽出・可視化について研究しています`,
  paraThree: `--History--`,
  His0: '同志社大学 理工学部 インテリジェント情報工学科 入学（2017）',
  His1: '2018年度同志社ローム記念館プロジェクト「ProntiatVR」WEB班所属（2018）',
  His2: '2019年度同志社ローム記念館プロジェクト「ProntiatVR」WEB班・UX班(サブリーダー)所属（2019）',
  His3: '同志社大学理工学部 知的機構研究室に所属（2019~）',
  His4: '同志社大学大学院 理工学研究科 知的機構研究室 入学予定（2021）',
  paraFour: `--Experiense--`,
  Ex0: 'エンジニア志望学生LT大会-TechStudtyGroup#2（2020.5）',
  Ex1: '技育祭 学生LT大会（2020.7）',
  Ex2: 'エンジニア志望学生LT大会-TechStudtyGroup#5（2020.7）',
  Ex3: 'オンコン（2020.7）',
  Ex4: 'サマーハッカソン（2020.8）',
  Ex5: 'Open Huck U（2020.9）',
};

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        {/* <SEO
          title="About"
          description={description}
          path=""
          keywords={['Rolwin', 'Reevan', 'Monteiro', 'FullStack developer', 'Javascript', 'ReactJS', 'NodeJS', 'Gatsby']}
        /> */}
        <h1 className="titleSeparate">About Me</h1>
        <p>{pageText.paraOne}</p>
        <p>{pageText.paraTwo}</p>
        <h3>{pageText.paraThree}</h3>
        <p>{pageText.His0}</p>
        <p>{pageText.His1}</p>
        <p>{pageText.His2}</p>
        <p>{pageText.His3}</p>
        <p>{pageText.His4}</p>
        <h3>{pageText.paraFour}</h3>
        <p>{pageText.Ex0}</p>
        <p>{pageText.Ex1}</p>
        <p>{pageText.Ex2}</p>
        <p>{pageText.Ex3}</p>
        <p>{pageText.Ex4}</p>
        <p>{pageText.Ex5}</p>
      </div>
      <h1 className="titleSeparate">Skills</h1>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH4="Born and bought up in"
            textH3="Mangalore, KA, India"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="coffee.png"
            alt="coffee image"
            textH4="Love Coffee"
            textH3="Coffee + Me = Happiness"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="meeting.png"
            alt="meeting image"
            textH4="Socially Awkward"
            textH3="At times"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="motorcycle.png"
            alt="motorcycle image"
            textH4="Love Riding"
            textH3="Biker for life"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH4="Self Taught Programmer"
            textH3="Thanks to the Web Resources"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="Pursued B.Tech in"
            textH3="Computer Science"
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutMe;
