import React from "react"
import { Row, Col } from "antd"
import AboutTile from "../../AbouTile"
import { stripTags, domHtml } from "../../../utils/stripTags"

// import SEO from '../../Seo';

const pageText = {
  paraOne: `こんにちは！同志社大学理工学部インテリジェント情報工学科4年の橋本夏希です！`,
  paraTwo: `データサイエンス・データ分析・機械学習に興味があり、現在ソーシャルメディアデータの知識抽出・可視化について研究しています`,
  
  paraThree: `--History--`,
  His0: "★ 同志社大学 理工学部 インテリジェント情報工学科 入学 (2017)",
  His1:
    "★ 2018年度同志社ローム記念館プロジェクト「ProntiatVR」WEB班所属 (2018)",
  His2:
    "★ 2019年度同志社ローム記念館プロジェクト「ProntiatVR」WEB班・UX班(サブリーダー)所属 (2019)",
  His3: "★ 同志社大学理工学部 知的機構研究室に所属 (2020~)",
  His4: "★ 同志社大学大学院 理工学研究科 知的機構研究室 入学予定 (2021)",

  paraFive: `--Research--`,
  Res0: "★ 可視化合宿 参加・登壇  (2020.9)",
  Res1: "★ ABCIミニキャンプ 参加  (2020.10)",

  paraFour: `--Experiense--`,
  Ex0: "★ エンジニア志望学生LT大会-TechStudtyGroup#2 (2020.5)",
  Ex1: "★ 技育祭 学生LT大会 登壇 (2020.7)",
  Ex2: "★ エンジニア志望学生LT大会-TechStudtyGroup#5 (2020.7)",
  Ex3: "★ オンコン (2020.7)",
  Ex4: "★ サマーハッカソン (2020.8)",
  Ex5: "★ Open Huck U vol.3 (2020.9)",
  Ex6: "★ 初音ミク「マジカルミライ 2020」プログラミング・コンテスト (2020.11)",
  Ex7: "★ Mask×Technology これからのマスクを考えるアイデアコンペティション 【一次選考突破】 (2020.11)",
  Ex8: "★ ウインターハッカソン vol.5 【入選】 (2020.12)",
  Ex9: "★ ウインターハッカソン vol.7 【入選】 (2021.2)",
  Ex10: "★ 技育祭 学生LT大会 登壇 (2021.3)",
  Ex11: "★ Open Huck U vol.4 (2021.3)",

  paraSeven: `--Data Conpetition--`,
  Data0: "★ atmacup #8 (2020.12)",

  paraSix: '--Internship--',
  paraSix1: '【2days, 3days】',
  Intern10: "★ アイレップ「コミュニケーションプランニングコース」(2days, 2019.8)",
  Intern11: "★ NTT西日本「NExT One Main」(3days, 2019.9)",
  Intern12: "★ ニフティ「【エンジニア向け】データ分析を学ぶ！開発3daysインターン」(3days, 2019.9)",
  paraSix2: '【1day】',
  Intern20: "ブリッジコーポレーション(2019.7), sky(2019.7), データフォーシーズ(2019.8,2019.12), TISソリューションリンク(2019.8), グッドパッチ(2019.8), D2C(2019.8), Acroquest Technology(2019.9), FBS(2019.11)",

  Skill0: "TOEIC: 710",
  Skill1: "英検2級",
  Skill2: "応用情報技術者試験合格",
  Skill3: "基本情報技術者試験合格",
  Skill4: "AtCoder: 茶色",

  Skill91: "漢検2級",
  Skill92: "語彙・読解力検定2級",
  Skill93: "硬筆書写技能検定試験3級",
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
        <p><a href="./blog/pronti_ux_kiroku"><font color="#0f52a6">{pageText.His2}</font></a></p>
        <p><a href="https://mm.doshisha.ac.jp/"><font color="#0f52a6">{pageText.His3}</font></a></p>
        <p>{pageText.His4}</p>
        <h2>{pageText.paraFive}</h2>
        <p>{pageText.Res0}</p>
        <p>{pageText.Res1}</p>
        <h2>{pageText.paraFour}</h2>
        <p><a href="./blog/deeplearning_nyuumonn"><font color="#0f52a6">{pageText.Ex0}</font></a></p>
        <p><a href="./blog/anatanomikata_bot" ><font color="#0f52a6">{pageText.Ex1}</font></a></p>
        <p><a href="./blog/yowayowa_kaggle" ><font color="#0f52a6">{pageText.Ex2}</font></a></p>
        <p><a href="./blog/oncon" ><font color="#0f52a6">{pageText.Ex3}</font></a></p>
        <p><a href="./blog/portfolio" ><font color="#0f52a6">{pageText.Ex4}</font></a></p>
        <p><a href="./blog/open_hack_u_2020" ><font color="#0f52a6">{pageText.Ex5}</font></a></p>
        <p><a href="./blog/mm2020procon" ><font color="#0f52a6">{pageText.Ex6}</font></a></p>
        <p><a href="./blog/mask_ideaconpe" ><font color="#0f52a6">{pageText.Ex7}</font></a></p>
        <p><a href="./blog/winter_hackathon5" ><font color="#0f52a6">{pageText.Ex8}</font></a></p>
        <p>{pageText.Ex9}</p>
        <p>{pageText.Ex10}</p>
        <p>{pageText.Ex11}</p>

        <h2>{pageText.paraSeven}</h2>
        <p>{pageText.Data0}</p>
        
        <h2>{pageText.paraSix}</h2>
        <h3>{pageText.paraSix1}</h3>
        <p>{pageText.Intern10}</p>
        <p>{pageText.Intern11}</p>
        <p>{pageText.Intern12}</p>
        <h3>{pageText.paraSix2}</h3>
        <p>{pageText.Intern20}</p>
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
            img="mysql.svg"
            alt="MySQL image"
            textH3="MySQL (2021~)"
            textH4="勉強中"
          />
        </Col>
        </Row>
        <Row gutter={[20, 20]}>
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
        </Row>
        <Row gutter={[20, 20]}>
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
            img="flask.svg"
            alt="flask image"
            textH3="Flask (2020~)"
            textH4="WEBアプリ制作のために使用"
          />
        </Col>
        </Row>
  
        <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="heroku.svg"
            alt="heroku image"
            textH3="heroku (2020~)"
            textH4="いくつかのWEBアプリをデプロイするのに使用"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="firebase.svg"
            alt="firebase image"
            textH3="firebase (2020~)"
            textH4="いくつかのWEBアプリをデプロイするのに使用"
          />
        </Col>
      </Row>
      <h1 className="titleSeparate">Skills (Others)</h1>
      <p>{pageText.Skill0}</p>
      <p>{pageText.Skill1}</p>
      <p>{pageText.Skill2}</p>
      <p>{pageText.Skill3}</p>
      <p>{pageText.Skill4}</p>
      <p>-------------</p>
      <p>{pageText.Skill91}</p>
      <p>{pageText.Skill92}</p>
      <p>{pageText.Skill93}</p>
    </>
  )
}
export default AboutMe
