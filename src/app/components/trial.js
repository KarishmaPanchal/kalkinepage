"use client";
import React from "react";
import { Row, Col } from "antd";
import styles from "./portal.css";
import Image from "next/image";
import Vector from "../../../public/static/image/vector.webp";
import capture from "../../../public/static/image/capture.png";
import Graph from "../../../public/static/image/graph.png";
import { HiShare } from "react-icons/hi";
import { IoIosArrowRoundUp } from "react-icons/io";
export default function Portal() {
  return (
    <div>
      <div className="container-fluid">
        <div className="container">
          <Row>
            <Col span={12}>
              <div className="code">
                <ul className="exchangecode">
                  <li className="active">
                    TSX
                    <Image src={Vector} />
                  </li>
                  <li className="share_company">
                    <HiShare />
                    Share
                  </li>
                </ul>
                <div className="name">
                  <h1 className="companyname">Constellation Software Inc.</h1>
                  <Row>
                    <Col span={12}>
                      <div className="companyvalues">
                        <h4>
                          {" "}
                          Technology
                          <span className="box">CA</span>
                          CSU
                        </h4>
                        <h2>
                          3632.0
                          <span className="curency">CAD</span>
                          <div>
                            <span className="gain">1.60</span>
                            <span className="gainpercentage">
                              (
                              <IoIosArrowRoundUp />
                              0.04%)
                            </span>
                          </div>
                        </h2>
                        <p>Last update at 2024-01-23T19:46:00Z</p>
                        <button>Active</button>
                      </div>
                    </Col>
                    <Col span={12}>
                      <div className="companyrange">
                        <h3>Day Range</h3>
                        <div className="range">
                          <div className="rangespan">
                            <span>3600.00</span>
                            <span>3642.00</span>
                          </div>
                          <input
                            type="range"
                            min="3600.00"
                            max="3642.00"
                            value="3623.00"
                            class="range3"
                            step="0.001"
                            disabled=""
                          ></input>
                          <div className="rangespan">
                            <span>Low</span>
                            <span>High</span>
                          </div>
                        </div>
                        <h3> 52 Week Range</h3>
                        <div className="range">
                          <div className="rangespan">
                            <span>3663.87</span>
                            <span>3663.87</span>
                          </div>
                          <input
                            type="range"
                            min="2224.88"
                            max="3663.87"
                            value="3623.00"
                            class="range3"
                            step="0.001"
                            disabled=""
                          ></input>
                          <div className="rangespan">
                            <span>Low</span>
                            <span>High</span>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col span={12}>
              <div className="companychart">
                <Image src={capture} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={16}>
             
              <Row>
                <Col span={8}>
                <h3 className="sectionssubheadings">Income Statement</h3>
                  <Image src={Graph} />
                  <div
                    className="legend"
                    style={{ "background-color": "rgb(4, 84, 214);" }}
                  >
                    <span>Total Revenue</span>
                  </div>
                  <div
                    className="legend"
                    style={{ "background-color": "rgb(245, 133, 51);" }}
                  >
                    <span>Net Income</span>
                  </div>
                </Col>
                
                <Col span={8}>
                  <h3 className="sectionssubheadings">Income Statement</h3>

                 
                  <Image src={Graph} />
                  <div
                    className="legend"
                    style={{ "background-color": "rgb(4, 84, 214);" }}
                  >
                    <span>Total Revenue</span>
                  </div>
                  <div
                    className="legend"
                    style={{ "background-color": "rgb(245, 133, 51);" }}
                  >
                    <span>Net Income</span>
                  </div>
                </Col>
                <Col span={8}>
                  <h3 className="sectionssubheadings">Income Statement</h3>

                 
                  <Image src={Graph} />
                  <div
                    className="legend"
                    style={{ "background-color": "rgb(4, 84, 214);" }}
                  >
                    <span>Total Revenue</span>
                  </div>
                  <div
                    className="legend"
                    style={{ "background-color": "rgb(245, 133, 51);" }}
                  >
                    <span>Net Income</span>
                  </div>
                </Col>
              </Row>
            </Col>
            
          </Row>
        </div>
      </div>
    </div>
  );
}
