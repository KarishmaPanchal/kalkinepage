"use client";
import React, { useState } from "react";
import { Row, Col, Carousel } from "antd";
import "./portal.css";
import Image from "next/image";
import Vector from "../../../public/static/image/vector.webp";
import capture from "../../../public/static/image/capture.png";
import Graph from "../../../public/static/image/graph.png";
import Graphs from "../../../public/static/image/graph2.png";
import Graphss from "../../../public/static/image/graph3.png";
import Graphsss from "../../../public/static/image/graph4.png";
import Graphssss from "../../../public/static/image/graph5.png";
import Graphsssss from "../../../public/static/image/graph6.png";
import Lock from "../../../public/static/image/lock.png";
import Arrow from "../../../public/static/image/arrow.png";
import Arrownew from "../../../public/static/image/arrow2.png";
import Article from "../../../public/static/image/latestarticleone.png";
import { MdArrowUpward } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";
import { HiShare } from "react-icons/hi";
import { IoIosArrowRoundUp } from "react-icons/io";
import IncomStatement from "./incomStatement";
import Balancesheet from "./Balancesheet";
import CashFlowData from "./CashFlowData";

export default function Portal() {
  

  const carouselRef = React.createRef();

  const handle_PrevClick = () => {
    carouselRef.current.prev();
  };

  const handle_NextClick = () => {
    carouselRef.current.next();
  };
  const [activeTab, setActiveTab] = useState("keyratios");
  const handleTabClick = (tabId) => {
    console.log("tabId", tabId);
    setActiveTab(tabId);
  };

  return (
    <div>
      <div className="container-fluid tabnavgation">
        <div className="container">
          <Row>
            <Col span={24}>
              <ul className="company_navagation">
                <li>
                  <a href="#company_overview" className="active">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#company_overview" className="active">
                    Financial
                  </a>
                </li>
                <li>
                  <a href="#company_overview" className="active">
                    Peer Comparsion
                  </a>
                </li>
                <li>
                  <a href="#company_overview" className="active">
                    Reports
                  </a>
                </li>
                <li>
                  <a href="#company_overview" className="active">
                    Stock Research & News
                  </a>
                </li>
                <li>
                  <a href="#company_overview" className="active">
                    Profile
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <Row>
            <Col xs={24} md={12} xl={12} sm={24} lg={12}>
              <Row >
                <Col xl={12} xs={24} md={24} sm={24} lg={12}>
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
                      <h1 className="companyname">
                        Constellation Software Inc.
                      </h1>

                      <div className="companyvalues">
                        <h4>
                          Technology
                          <span className="box">CA</span>
                          CSU
                        </h4>
                        <h2>
                          3632.0
                          <span className="curency">CAD</span>
                          <div className="topp">
                            <span className="gain">1.60</span>
                            <span className="gainpercentage">
                              (<IoIosArrowRoundUp />
                              0.04%)
                            </span>
                          </div>
                        </h2>
                        <p>Last update at 2024-01-23T19:46:00Z</p>
                        <button>Active</button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xl={12} xs={24} md={24} sm={24} lg={12} >
                  <div className="companyrange">
                    <h3>Day Range</h3>
                    <div className="range">
                      <div className="rangespan">
                        <span>3600.00</span>
                        <span>3642.00</span>
                      </div>

                      <input
                        type="range"
                        step="0.001"
                        id="volume"
                        className="range3"
                        name="volume"
                        min="3600.00"
                        max="3642.00"
                      />

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
            </Col>
            <Col xl={12} xs={24} md={12} sm={24} lg={12}>
              <div className="companychart">
                <Image src={capture} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xl={18} xs={24}  md={24} sm={24} lg={18}>
              <Row>
                <div className="financialsection">
                  <h2 className="sectionheadings">Financial</h2>

                  <div className="tabs">
                    <ul class="nav nav-tabs financialstabs">
                      <li class="nav-item">
                        <a
                          href="#keyratios"
                          // class="nav-link active"
                          className={`nav-link ${
                            activeTab === "keyratios" ? "active" : ""
                          }`}
                          onClick={() => handleTabClick("keyratios")}
                        >
                          Charts
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          href="#incomestatement"
                          className={`nav-link ${
                            activeTab === "incomestatement" ? "active" : ""
                          }`}
                          onClick={() => handleTabClick("incomestatement")}
                        >
                          Income Statement
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          href="#balancesheet"
                          className={`nav-link ${
                            activeTab === "balancesheet" ? "active" : ""
                          }`}
                          onClick={() => handleTabClick("balancesheet")}
                        >
                          Balance Sheet
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          href="#cashflow"
                          className={`nav-link ${
                            activeTab === "cashflow" ? "active" : ""
                          }`}
                          onClick={() => handleTabClick("cashflow")}
                          // data-bs-toggle="tab"
                        >
                          Cash Flow
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Row>

              {/* starting */}
              <div className="tab-content">
                {activeTab === "keyratios" && (
                  <div className="tab-pane active" id="keyratios">
                    {/* Add your charts component here */}
                  </div>
                )}
                {activeTab === "incomestatement" && (
                  <div className="tab-pane active" id="incomestatement">
                    <IncomStatement />
                  </div>
                )}
                {activeTab === "balancesheet" && (
                  <div className="tab-pane active" id="balancesheet">
                    <Balancesheet />
                  </div>
                )}
                {activeTab === "cashflow" && (
                  <div className="tab-pane active" id="cashflow">
                    <CashFlowData />
                  </div>
                )}
              </div>

              {/* ending */}
              {activeTab === "keyratios" && (
                <Row>
                  <Col xl={8} xs={24} md={12} sm={12} lg={8}>
                    <h3 className="sectionssubheadings">Income Statement</h3>
                    <Image className="space" src={Graphs} />
                    <div className="legendcommon">
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
                    </div>
                  </Col>

                  <Col xl={8} xs={24} md={12} sm={12} lg={8}>
                    <h3 className="sectionssubheadings">Balancesheet</h3>
                    <Image className="space" src={Graphs} />
                    <div className="legendcommon">
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
                    </div>
                  </Col>
                  <Col xl={8} xs={24} md={12} sm={12} lg={8} >
                    <h3 className="sectionssubheadings">Change In Cash</h3>
                    <Image className="space" src={Graphss} />
                  </Col>
                  <Col xl={8} xs={24} md={12} sm={12} lg={8}>
                    <h3 className="sectionssubheadings">
                      Total Operating Cash
                    </h3>
                    <Image className="space" src={Graphsss} />
                  </Col>
                  <Col xl={8} xs={24} md={12} sm={12} lg={8}>
                    <h3 className="sectionssubheadings">
                      Earning Per Share (EPS)
                    </h3>
                    <Image className="space" src={Graphssss} />
                  </Col>
                  <Col xl={8} xs={24} md={12} sm={12} lg={8}>
                    <h3 className="sectionssubheadings">Dividends Paid</h3>
                    <Image className="space" src={Graphsssss} />
                  </Col>
                </Row>
              )}
            </Col>
            <Col xl={6} xs={24} md={24} sm={24} lg={6}>
              <div className="companyfundamentals_rightnav">
                <h2 className="sectionheading">Fundamental</h2>
                <ul className="fundamentallist">
                  <li>
                    Previous close
                    <span>-</span>
                  </li>
                  <li>
                    Market Cap
                    <span>-</span>
                  </li>
                  <li>
                    Volume
                    <span>-</span>
                  </li>
                  <li>
                    P\E Ratio
                    <span>-</span>
                  </li>
                  <li>
                    Dividend Yield
                    <span>-</span>
                  </li>
                  <li>
                    EBITDA
                    <span>-</span>
                  </li>
                  <li>
                    Revenue TTM
                    <span>-</span>
                  </li>
                  <li>
                    Revenue Peer Share TTM
                    <span>-</span>
                  </li>
                  <li>
                    Gross Profit TTM
                    <span>-</span>
                  </li>
                  <li>
                    Diluted EPS TTM
                    <span>-</span>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <h2 className="sectionheadings">Peer Comparsion</h2>
              <p className="peerindustry">
                <span>
                  <b>Sector:</b>
                  <span className="industryvalues">Financial Services</span>
                </span>
                <span>
                  <b>Industry:</b>
                  <span className="industryvalues">Bank-Diversified</span>
                </span>
              </p>
            </Col>
            <Col span={24}>
              <div className="responsive">
                <table className="peercompare_table">
                  <thead>
                    <tr>
                      <th>Company</th>
                      <th className="text-end">Change (CAD)</th>
                      <th className="text-end">Price (CAD)</th>
                      <th className="text-end">Trailing PE</th>
                      <th className="text-end">Forward PE</th>
                      <th className="text-end">Price Sales TTM</th>
                      <th className="text-end">Price Book MRQ</th>
                      <th className="text-end">Enterprise Value Revenue</th>
                      <th className="text-end">Enterprise Value EBITDA</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="table_data">
                        <b>
                          <a href="/">RY</a>
                          <br></br>
                          <span className="compareticker_name">
                            Royal Bank Of Canada
                          </span>
                        </b>
                      </td>
                      <td className="text-end">
                        -0.12
                        <span className="similarcomp_percent isnegative">
                          0.09%
                        </span>
                      </td>
                      <td className="text-end">132.22</td>
                      <td className="text-end">12.74</td>
                      <td className="text-end">11.64</td>
                      <td className="text-end">3.51</td>
                      <td className="text-end">1.71</td>
                      <td className="text-end">0.0</td>
                      <td className="text-end">0.0</td>
                    </tr>
                    <tr>
                      <td className="table_data">
                        <b>
                          <a href="/">TD</a>
                          <br></br>
                          <span className="compareticker_name">
                            Tornoto Domain Bank
                          </span>
                        </b>
                      </td>
                      <td className="text-end">
                        0.13
                        <span className="similarcomp_percent ispositive">
                          0.16%
                        </span>
                      </td>
                      <td className="text-end">82.42</td>
                      <td className="text-end">14.49</td>
                      <td className="text-end">10.11</td>
                      <td className="text-end">2.95</td>
                      <td className="text-end">1.44</td>
                      <td className="text-end">0.0</td>
                      <td className="text-end">0.0</td>
                    </tr>
                    <tr>
                      <td className="table_data">
                        <b>
                          <a href="/">BMO</a>
                          <br></br>
                          <span className="compareticker_name">
                            Bank of Montreal
                          </span>
                        </b>
                      </td>
                      <td className="text-end">
                        0.41
                        <span className="similarcomp_percent ispositive">
                          0.32%
                        </span>
                      </td>
                      <td className="text-end">130.45</td>
                      <td className="text-end">22.67</td>
                      <td className="text-end">10.54</td>
                      <td className="text-end">3.20</td>
                      <td className="text-end">1.26</td>
                      <td className="text-end">0.0</td>
                      <td className="text-end">0.0</td>
                    </tr>
                    <tr>
                      <td className="table_data">
                        <b>
                          <a href="/">BNS</a>
                          <br></br>
                          <span className="compareticker_name">
                            Bank of Nova Scotia
                          </span>
                        </b>
                      </td>
                      <td className="text-end">
                        0.07
                        <span className="similarcomp_percent ispositive">
                          0.12%
                        </span>
                      </td>
                      <td className="text-end">61.74</td>
                      <td className="text-end">10.73</td>
                      <td className="text-end">9.32</td>
                      <td className="text-end">2.57</td>
                      <td className="text-end">1.08</td>
                      <td className="text-end">0.0</td>
                      <td className="text-end">0.0</td>
                    </tr>
                    <tr>
                      <td className="table_data">
                        <b>
                          <a href="/">CM</a>
                          <br></br>
                          <span className="compareticker_name">
                            {" "}
                            Candian Imperial Bank of Commerce
                          </span>
                        </b>
                      </td>
                      <td className="text-end">
                        0.17
                        <span className="similarcomp_percent ispositive">
                          0.28%
                        </span>
                      </td>
                      <td className="text-end">61.74</td>
                      <td className="text-end">11.96</td>
                      <td className="text-end">9.29</td>
                      <td className="text-end">2.70</td>
                      <td className="text-end">1.20</td>
                      <td className="text-end">0.0</td>
                      <td className="text-end">0.0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div className="reportcoveredsection">
                <h2 className="sectionheading">Report Covered</h2>
                <Carousel
                  ref={carouselRef}
                  autoplay
                  slidesToShow={5}
                  onClick={Event}
                >
                  <div className="item">
                    <div className="reportcovered_data">
                      <p className="compreport_stats">
                        <span className="reportcomp_category">Small-Cap</span>
                        <span style={{ textAlign: "center" }}>
                          Risk Rating
                          <span className="reportcomp_category">High</span>
                        </span>
                      </p>
                      <h3>
                        <a href="https://kalkine.ca/report/medifast-inc-43">
                          Medifast, Inc.
                        </a>
                      </h3>
                      <p class="reporttime">5&nbsp;days, 1&nbsp;hour ago</p>
                      <p className="reportcontent_stats">
                        <span className="reportcomp_price">
                          <label>Rec. Price</label>

                          <Image src={Lock} />
                        </span>
                        <span className="reportcomp_action">
                          <label>Action</label>
                          <span className="ispositive">
                            <span className="actionrecommendation">_</span>
                          </span>
                          <Image src={Lock} />
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="reportcovered_data">
                      <p className="compreport_stats">
                        <span className="reportcomp_category">Small-Cap</span>
                        <span style={{ textAlign: "center" }}>
                          Risk Rating
                          <span className="reportcomp_category">High</span>
                        </span>
                      </p>
                      <h3>
                        <a href="https://kalkine.ca/report/medifast-inc-43">
                          Medifast, Inc.
                        </a>
                      </h3>
                      <p class="reporttime">5&nbsp;days, 1&nbsp;hour ago</p>
                      <p className="reportcontent_stats">
                        <span className="reportcomp_price">
                          <label>Rec. Price</label>

                          <Image src={Lock} />
                        </span>
                        <span className="reportcomp_action">
                          <label>Action</label>
                          <span className="ispositive">
                            <span className="actionrecommendation">_</span>
                          </span>
                          <Image src={Lock} />
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="reportcovered_data">
                      <p className="compreport_stats">
                        <span className="reportcomp_category">Small-Cap</span>
                        <span style={{ textAlign: "center" }}>
                          Risk Rating
                          <span className="reportcomp_category">High</span>
                        </span>
                      </p>
                      <h3>
                        <a href="https://kalkine.ca/report/medifast-inc-43">
                          Medifast, Inc.
                        </a>
                      </h3>
                      <p class="reporttime">5&nbsp;days, 1&nbsp;hour ago</p>
                      <p className="reportcontent_stats">
                        <span className="reportcomp_price">
                          <label>Rec. Price</label>

                          <Image src={Lock} />
                        </span>
                        <span className="reportcomp_action">
                          <label>Action</label>
                          <span className="ispositive">
                            <span className="actionrecommendation">_</span>
                          </span>
                          <Image src={Lock} />
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="reportcovered_data">
                      <p className="compreport_stats">
                        <span className="reportcomp_category">Small-Cap</span>
                        <span style={{ textAlign: "center" }}>
                          Risk Rating
                          <span className="reportcomp_category">High</span>
                        </span>
                      </p>
                      <h3>
                        <a href="https://kalkine.ca/report/medifast-inc-43">
                          Medifast, Inc.
                        </a>
                      </h3>
                      <p class="reporttime">5&nbsp;days, 1&nbsp;hour ago</p>
                      <p className="reportcontent_stats">
                        <span className="reportcomp_price">
                          <label>Rec. Price</label>

                          <Image src={Lock} />
                        </span>
                        <span className="reportcomp_action">
                          <label>Action</label>
                          <span className="ispositive">
                            <span className="actionrecommendation">_</span>
                          </span>
                          <Image src={Lock} />
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="reportcovered_data">
                      <p className="compreport_stats">
                        <span className="reportcomp_category">Small-Cap</span>
                        <span style={{ textAlign: "center" }}>
                          Risk Rating
                          <span className="reportcomp_category">High</span>
                        </span>
                      </p>
                      <h3>
                        <a href="https://kalkine.ca/report/medifast-inc-43">
                          Medifast, Inc.
                        </a>
                      </h3>
                      <p class="reporttime">5&nbsp;days, 1&nbsp;hour ago</p>
                      <p className="reportcontent_stats">
                        <span className="reportcomp_price">
                          <label>Rec. Price</label>

                          <Image src={Lock} />
                        </span>
                        <span className="reportcomp_action">
                          <label>Action</label>
                          <span className="ispositive">
                            <span className="actionrecommendation">_</span>
                          </span>
                          <Image src={Lock} />
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="reportcovered_data">
                      <p className="compreport_stats">
                        <span className="reportcomp_category">Small-Cap</span>
                        <span style={{ textAlign: "center" }}>
                          Risk Rating
                          <span className="reportcomp_category">High</span>
                        </span>
                      </p>
                      <h3>
                        <a href="https://kalkine.ca/report/medifast-inc-43">
                          Medifast, Inc.
                        </a>
                      </h3>
                      <p class="reporttime">5&nbsp;days, 1&nbsp;hour ago</p>
                      <p className="reportcontent_stats">
                        <span className="reportcomp_price">
                          <label>Rec. Price</label>

                          <Image src={Lock} />
                        </span>
                        <span className="reportcomp_action">
                          <label>Action</label>
                          <span className="ispositive">
                            <span className="actionrecommendation">_</span>
                          </span>
                          <Image src={Lock} />
                        </span>
                      </p>
                    </div>
                  </div>
                </Carousel>

                <div className="btn_nav">
                  <div className="left-btn" onClick={handle_PrevClick}>
                    <button type="button" className="btn-prev">
                      <Image src={Arrow} />
                    </button>
                  </div>
                  <div className="right-btn" onClick={handle_NextClick}>
                    <button type="button" className="btn-next">
                      <Image src={Arrow} />
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <h2 className="sectionheadings">Stock Research & News</h2>
              <div className="tab">
                <ul class="nav nav-tabs kalgainers_hometabs">
                  <li class="nav-item">
                    <a
                      href="#stockresearch"
                      class="nav-link active"
                      data-bs-toggle="tab"
                    >
                      Stock Research
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="#trendingnewsarticle"
                      class="nav-link"
                      data-bs-toggle="tab"
                    >
                      News
                    </a>
                  </li>
                </ul>
                <a href="/" class="newsall">
                  View All
                </a>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xl={24} md={24} sm={24}>
              <div className="tab-content articlenewstab">
                <div className="tab-pane fade show active">
                  <ul className="latestarticleul">
                    <li>
                      <a href="/">
                        <Image src={Article} />
                        <div className="articlecontent">
                          <div className="newstiming">
                            <p>17&nbsp;hours ago | Team Kalkine</p>
                          </div>
                          <h2>
                            One Materials Stock to Consider at the Current
                            Level- BTO
                          </h2>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <Image src={Article} />
                        <div className="articlecontent">
                          <div className="newstiming">
                            <p>17&nbsp;hours ago | Team Kalkine</p>
                          </div>
                          <h2>
                            One Materials Stock to Consider at the Current
                            Level- BTO
                          </h2>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <Image src={Article} />
                        <div className="articlecontent">
                          <div className="newstiming">
                            <p>17&nbsp;hours ago | Team Kalkine</p>
                          </div>
                          <h2>
                            One Materials Stock to Consider at the Current
                            Level- BTO
                          </h2>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <Image src={Article} />
                        <div className="articlecontent">
                          <div className="newstiming">
                            <p>17&nbsp;hours ago | Team Kalkine</p>
                          </div>
                          <h2>
                            One Materials Stock to Consider at the Current
                            Level- BTO
                          </h2>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <Image src={Article} />
                        <div className="articlecontent">
                          <div className="newstiming">
                            <p>17&nbsp;hours ago | Team Kalkine</p>
                          </div>
                          <h2>
                            One Materials Stock to Consider at the Current
                            Level- BTO
                          </h2>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <Image src={Article} />
                        <div className="articlecontent">
                          <div className="newstiming">
                            <p>17&nbsp;hours ago | Team Kalkine</p>
                          </div>
                          <h2>
                            One Materials Stock to Consider at the Current
                            Level- BTO
                          </h2>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xl={12} xs={24} md={12}>
              <h2 className="sectionheadings">Profile</h2>
              <div className="descriptionbox">
                <input type="checkbox" id="expanded" />
                <p className="compprofile_description">
                  TerrAscend Corp. cultivates, processes, and sells medical and
                  adult use cannabis in Canada and the United States. The
                  company produces and distributes hemp-derived wellness
                  products to retail locations; and manufactures
                  cannabis-infused artisan edibles. It also operates retail
                  dispensaries under the Apothecarium brand name in California,
                  Pennsylvania, and New Jersey. In addition, the company owns
                  various synergistic businesses under Gage Growth, Pinnacle,
                  TerrAscend NJ, Ilera Healthcare, HMS Health and HMS
                  Processing, Valhalla Confections, State Flower, Arise
                  Bioscience Inc., and TerrAscend Canada brands. It serves
                  medical and legal adult-use markets. The company was
                  incorporated in 2017 and is headquartered in Mississauga,
                  Canada.
                </p>

                <label
                  for="expanded"
                  role="button"
                  id="ob-readmore-placeholder"
                >
                  <span></span>
                </label>
              </div>
              <h3 className="sectionsubheadings">TerrAscend Corp</h3>
              <div className="contact">
                <ul className="comprofile_contact">
                  <li>
                    {/* <IoIosContact /> */}
                    Employees :<b>972</b>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xl={12} xs={24} md={12}>
              <h3 className="sectionsubheadings">Key Executives</h3>
              <div className="table-executive">
                <div className="table-responsive">
                  <table class="table text-nowrap" id="directors-transections">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Title</th>
                        <th scope="col">Year Born</th>
                      </tr>
                    </thead>
                    <tbody></tbody>
                  </table>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <p className="compprofile_description">
                <b>Disclaimer -</b> Data Powered by EOD Historical Data
                (“EODHD”). All CFDs (stocks, indices, mutual funds, ETFs), and
                Forex are not provided by exchanges but rather by market makers,
                and so prices may not be accurate and may differ from the actual
                market price, meaning prices are indicative and not appropriate
                for trading purposes. EODHD is not using exchanges data feeds
                for the pricing data, EODHD is using OTC, peer to peer trades
                and trading platforms over 100+ sources, EODHD is aggregating
                its data feeds via VWAP method. Therefore, EOD Historical Data
                doesn’t bear any responsibility for any trading losses you might
                incur as a result of using this data. EOD Historical Data or
                anyone involved with EOD Historical Data will not accept any
                liability for loss or damage as a result of reliance on the
                information including data, quotes, charts and buy/sell signals
                contained within this website. Please be fully informed
                regarding the risks and costs associated with trading the
                financial markets, it is one of the riskiest investment forms
                possible. EOD Historical Data does not give any warranties
                (including, without limitation, as to merchantability or fitness
                for a particular purpose or use).
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
