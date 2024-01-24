"use client";
import React from "react";
import { Row, Col } from "antd";
import styles from "./portal.css";
import Image from "next/image";
import Vector from "../../../public/static/image/vector.webp";
import capture from "../../../public/static/image/capture.png";
import Graph from "../../../public/static/image/graph.png";
import Graphs from "../../../public/static/image/graph2.png";
import Graphss from "../../../public/static/image/graph3.png";
import Graphsss from "../../../public/static/image/graph4.png";
import Graphssss from "../../../public/static/image/graph5.png";
import Graphsssss from "../../../public/static/image/graph6.png";



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

              <div className="financialsection">
                <h2 className="sectionheading">Financial</h2>
                <div className="tabs">
                  <ul class="nav nav-tabs financialstabs">
                    <li class="nav-item">
                      <a
                        href="#keyratios"
                        class="nav-link"
                        data-bs-toggle="tab"
                      >
                        Charts
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        href="#incomestatement"
                        class="nav-link active"
                        data-bs-toggle="tab"
                      >
                        Income Statement
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        href="#balancesheet"
                        class="nav-link"
                        data-bs-toggle="tab"
                      >
                        Balance Sheet
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="#cashflow" class="nav-link" data-bs-toggle="tab">
                        Cash Flow
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              </Row>
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
                  <h3 className="sectionssubheadings">Balancesheet</h3>
                  <Image src={Graphs} />
                  <div
                    className="legend"
                    style={{ "background-color": "rgb(4, 84, 214);" }}
                  >
                    <span>Total Assest</span>
                  </div>
                  <div
                    className="legend"
                    style={{ "background-color": "rgb(245, 133, 51);" }}
                  >
                    <span>Total Liabalities</span>
                  </div>
                </Col>
                <Col span={8}>
                  <h3 className="sectionssubheadings">Change In Cash</h3>
                  <Image src={Graphss} />
                </Col>
                <Col span={8}>
                  <h3 className="sectionssubheadings">Total Operating Cash</h3>
                  <Image src={Graphsss} />
                </Col>
                <Col span={8}>
                  <h3 className="sectionssubheadings">Earning Per Share (EPS)</h3>
                  <Image src={Graphssss} />
                </Col>
                <Col span={8}>
                  <h3 className="sectionssubheadings">Dividends Paid</h3>
                  <Image src={Graphsssss} />
                </Col>

              </Row>
            </Col>
            <Col span={8}>
              <div className="companyfundamentals_rightnav">
                <h2 className="sectionheadings">Fundamental</h2>
                <ul></ul>

              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
