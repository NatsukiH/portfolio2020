import React from "react"
import { Row, Col } from "antd"
import AboutTile from "../../AbouTile"
import { stripTags, domHtml } from "../../../utils/stripTags"

// import SEO from '../../Seo';

const pageText = {
  paraOne: `こんにちは！同志社大学理工学部インテリジェント情報工学科4年の橋本夏希です！`,
  paraTwo: `データサイエンス・データ分析・機械学習に興味があり、現在ソーシャルメディアデータの知識抽出・可視化について研究しています`,
  paraThree: `--History--`,
  His0: "★ 同志社大学 理工学部 インテリジェント情報工学科 入学（2017）",
  His1:
    "★ 2018年度同志社ローム記念館プロジェクト「ProntiatVR」WEB班所属（2018）",
  His2:
    "★ 2019年度同志社ローム記念館プロジェクト「ProntiatVR」WEB班・UX班(サブリーダー)所属（2019）",
  His3: "★ 同志社大学理工学部 知的機構研究室に所属（2020~）",
  His4: "★ 同志社大学大学院 理工学研究科 知的機構研究室 入学予定（2021）",
  paraFour: `--Experiense--`,
  Ex0: "★ エンジニア志望学生LT大会-TechStudtyGroup#2（2020.5）",
  Ex1: "★ 技育祭 学生LT大会（2020.7）",
  Ex2: "★ エンジニア志望学生LT大会-TechStudtyGroup#5（2020.7）",
  Ex3: "★ オンコン（2020.7）",
  Ex4: "★ サマーハッカソン（2020.8）",
  Ex5: "★ Open Huck U（2020.9）",

  Skill0: "TOEIC: 710",
  Skill1: "英検2級",
  Skill2: "基本情報技術者試験合格",
  Skill3: "AtCoder: 茶色",
}

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`
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
        <h2>{pageText.paraThree}</h2>
        <p>{pageText.His0}</p>
        <p>{pageText.His1}</p>
        <p>{pageText.His2}</p>
        <p>{pageText.His3}</p>
        <p>{pageText.His4}</p>
        <h2>{pageText.paraFour}</h2>
        <p>{pageText.Ex0}</p>
        <p>{pageText.Ex1}</p>
        <p>{pageText.Ex2}</p>
        <p>{pageText.Ex3}</p>
        <p>{pageText.Ex4}</p>
        <p>{pageText.Ex5}</p>
      </div>
      <h1 className="titleSeparate">Skills (Programming)</h1>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="python.svg"
            alt="python image"
            textH3="Python (2019~)"
            textH4="研究(機械学習・データ分析)，AtCoder(茶色)，Kaggleなど主に使用"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="c.svg"
            alt="C"
            textH3="C (2017~)"
            textH4="大学の授業や課題で，簡単なゲーム作りや画像処理に使用"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="java.svg"
            alt="Java image"
            textH3="Java (2018~)"
            textH4="大学の授業や課題で，簡単なゲーム作りに使用．JavaFXも少し"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="html-5.svg"
            alt="HTML image"
            textH3="HTML (2018~)"
            textH4="プロジェクトで使用．プロジェクトの公式HPやゲームサイトを制作"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="css-3.svg"
            alt="CSS image"
            textH3="CSS (2018~)"
            textH4="プロジェクトで使用．プロジェクトの公式HPやゲームサイトを制作"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="javascript.svg"
            alt="JavaScript image"
            textH3="JavaScript (2018~)"
            textH4="プロジェクトと個人で使用．WebVRやLINEbotなどを制作"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="react.svg"
            alt="React image"
            textH3="React.js (2020~)"
            textH4="ハッカソンで使用．"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="gatsby.svg"
            alt="Gatsby image"
            textH3="Gatsby.js (2020~)"
            textH4="ハッカソンで使用．このサイトはGatsby.jsで制作"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="d3.svg"
            alt="d3 image"
            textH3="D3.js (2020~)"
            textH4="研究で可視化インターフェースの制作のために使用"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="django.svg"
            alt="django image"
            textH3="Django (2020~)"
            textH4="簡単なWEBアプリ制作のために使用"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="unity.svg"
            alt="unity image"
            textH3="Unity (2020~)"
            textH4="簡単なチュートリアルを完走"
          />
        </Col>
      </Row>
      <h1 className="titleSeparate">Skills (Others)</h1>
      <p>{pageText.Skill0}</p>
      <p>{pageText.Skill1}</p>
      <p>{pageText.Skill2}</p>
      <p>{pageText.Skill3}</p>
    </>
  )
}
export default AboutMe
