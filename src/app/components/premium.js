"use client";
import React from "react";
import "../../../public/static/css/premium.css";
import { Row, Col } from "antd";
import Boat from "../../../public/static/image/boat.jpg";
import Eye from "../../../public/static/image/eye.jpg"
import Shirts from "../../../public/static/image/shirts.jpg"
import Lappy from "../../../public/static/image/lappy.jpg"
import Image from "next/image";

export default function Premium() {
  return (
    <div>
      <div className="container-fluid">
        <div className="container">
          <Row>
            <Col span={24}>
              <div className="content-split">
                <p className="breadcrumbs">
                  <a href="/">Home</a>
                  »
                  <span style={{color: "#000;"}}>Premium</span>
                </p>
                <p className="search_icon">
                    <span className="search_news">Search News</span>
                </p>
              </div>
            </Col>
            <Col span={20}>
                <p className="latest_news">
                  Latest News
                </p>
            </Col>
            <Col span={12}>
                <div className="premium">
                    < p className="dividend">Premium</p>
                    <div className="issue-axis">
                        <a href="">BofA initiates coverage on Weatherford International with a Buy rating; stock jumps 2.5%</a>
                    </div>
                    <p className="share_data">
                    Mon 13 Nov 23, 03:33 PM | | Akanksha Vashisht
                    </p>
                    <div className="carouselimage">
                       <Image src={Boat}/>
                      
                    </div>

                </div>
            </Col>
            <Col span={8}>
                <div className="pagecommon">
                <div className="common">
                <div className="latest_news_section">
                <Image src={Eye}
                  width={200}
                  height={100}/>
                <div className="picture">
                <label className="written">Premium</label>
                <div className="issue-solve-axis">
                        <a href="">William Blair initiates coverage on Eyenovia with an Outperform rating</a>
                    </div>
                    <p className="data">
                    Fri 03 Nov 23, 06:31 AM | Akanksha Vashisht
                    </p>
                </div>
                </div>
              
                <div className="latest_news_section">
                 <Image src={Shirts}
                   width={200}
                   height={100}/>
                 <div className="picture">
                <label className="written">Premium</label>
                <div className="issue-solve-axis">
                        <a href="">Wells Fargo sees 22% upside potential in Gap, upgrades to Overweight</a>
                    </div>
                    <p className="data">
                    Fri 27 Oct 23, 04:40 AM | Akanksha Vashisht
                    </p>
                </div>
                </div>
                
                <div className="latest_news_section">
                <Image src={Lappy}
                width={200}
                height={100}/>
                <div className="picture">
                <label className="written">Premium</label>
                <div className="issue-solve-axis">
                        <a href="/">Gene editing firm Editas obtains rating upgrade from Citi</a>
                    </div>
                    <p className="data">
                    Wed 25 Oct 23, 01:43 PM | Akanksha Vashisht
                    </p>
                </div>
                </div>
                </div>
                </div>

            </Col>
          </Row>

        </div>
      </div>
    </div>
  );
}

