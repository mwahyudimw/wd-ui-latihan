import React, { Component } from 'react';
import './sessions.css';
import { Link } from 'react-router-dom';

export default class Session extends Component {


    render() {
        return (
          <div>

            <div className="session">

                <div className="judul">
                   <div className="judul-session">
                    <h1>Meetings</h1>
                    <button className="btnCreateNew"> + Create New</button>
                   </div>

                   <div className="card-table">
                     <Link to="/day"><button className="btnDay">Day</button></Link>
                     <Link to="/week" style={{ textDecoration:"none" }}><span >Week</span></Link>
                     <Link to="/month" style={{ textDecoration:"none" }}><span >Month</span></Link>
                   </div>

                </div>

                <div className="coverContent">

                  <div className="coverDayActive">
                      <div className="copContent">
                        <div className="titleContent">02nd Thursday</div>
                        <div className="lineContent"></div>
                        <div className="inputContent">
                          <div className="copInput">
                            <p className="timeContent">11.00 AM - 11.30 AM</p>
                            <p className="txtContent">Inspiration gathering</p>
                            <div className="btnCovers">
                            <p className="btnPaper"> <span className="fa fa-paper-plane-o"></span></p>
                            <p className="btnAM">AM</p>
                            <p className="btnES">ES</p>
                            <p className="btnPaperClip"><span className="fa fa-paperclip"></span> <font color="gray">10 Attachments</font></p>
                            </div>
                          </div>
                        </div>
                        <div className="inputContent2">
                          <div className="copInput">
                            <p className="timeContent"><font color="#fff">11.00 AM - 11.30 AM</font></p>
                            <p className="txtContent">Sketching</p>
                            <div className="btnCovers">
                            <p className="btnPaper" style={{ border:"1px solid #fff", color:"#fff" }}> <span className="fa fa-paper-plane-o"> +</span></p>
                            <p className="btnAM" style={{ background:"rgba(0,0,0,0.1)", border:"1px solid rgba(0,0,0,0.1)" }}><font color="#fff">AM</font></p>
                            <p className="btnES" style={{ background:"rgba(0,0,0,0.1)", border:"1px solid rgba(0,0,0,0.1)" }}><font color="#fff">BK</font></p>
                            <p className="btnPaperClip" style={{ color:"#fff" }}><span className="fa fa-paperclip"></span> <font color="#fff">10 Attachments</font></p>
                            </div>
                          </div>
                        </div>
                        <div className="inputContent3">
                          <div className="copInput">
                            <p className="timeContent">11.00 AM - 11.30 AM</p>
                            <p className="txtContent" style={{ position:"relative", bottom:"1vh" }}>Hikoot app Wireframes</p>
                            <div className="btnCovers2">
                            <p className="btnPaper"> <span className="fa fa-paper-plane-o"></span></p>
                            <p className="btnAM" style={{ background:"lavenderblush", color:"orange" }}>LA</p>

                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className="coverDay">
                    <div className="copContent">
                      <div className="titleContent">03rd Friday</div>
                      <div className="lineContent" style={{ width:"20%", background:"#ccc" }}></div>
                      <div className="inputContent">
                        <div className="copInput">
                          <p className="timeContent">11.00 AM - 11.30 AM</p>
                          <p className="txtContent">Website for the Product</p>
                          <div className="btnCovers">
                          <p className="btnPaper"> <span className="fa fa-paper-plane-o"></span></p>
                          <p className="btnAM">AM</p>
                          <p className="btnES">ES</p>
                          <p className="btnPaperClip"><span className="fa fa-paperclip"></span> <font color="gray">10 Attachments</font></p>
                          </div>
                        </div>
                      </div>
                      <div className="inputContent" style={{ position:"absolute", top:"29vh" }}>
                        <div className="copInput">
                          <p className="timeContent">11.00 AM - 11.30 AM</p>
                          <p className="txtContent">Hey you guys we need to do <p style={{ position:"relative", bottom:"2vh" }}>this and that too ✌️.</p></p>
                          <div className="btnCovers">
                          <p className="btnPaper"> <span className="fa fa-paper-plane-o"></span></p>
                          <p className="btnES" style={{ background:"lavenderblush", color:"orange" }}>LA</p>
                          <p className="btnAM">AM</p>
                          <p className="btnES" style={{ background:"lavenderblush", color:"violet" }}><b>FS</b></p>
                          </div>
                        </div>
                      </div>

                      </div>
                  </div>
                  <div className="coverDay1">
                    <div className="copContent">
                      <div className="titleContent">06th Monday</div>
                      <div className="lineContent" style={{ width:"20%", background:"#ccc" }}></div>
                      <div className="inputContent">
                        <div className="copInput">
                          <p className="timeContent">11.00 AM - 11.30 AM</p>
                          <p className="txtContent">Start usability testing</p>
                          <div className="btnCovers">
                          <p className="btnPaper"> <span className="fa fa-paper-plane-o"></span></p>
                          <p className="btnAM">TX</p>
                          <p className="btnES">ES</p>
                          <p className="btnPaperClip"><span className="fa fa-paperclip"></span> <font color="gray">10 Attachments</font></p>
                          </div>
                        </div>
                      </div>
                      <div className="inputContent" style={{ position:"absolute", top:"29vh" }}>
                        <div className="copInput">
                          <p className="timeContent">11.00 AM - 11.30 AM</p>
                          <p className="txtContent">Open discussion </p>
                          <div className="btnCovers">
                          <p className="btnPaper"> <span className="fa fa-paper-plane-o"></span></p>
                          <p className="btnES" style={{ background:"lavenderblush", color:"orange" }}>LA</p>
                          </div>
                        </div>
                      </div>
                      <div className="inputContent" style={{ position:"absolute", top:"47vh", height:"10vh" }}>
                        <div className="copInput">
                          <p className="timeContent">11.00 AM - 11.30 AM</p>
                          <p className="txtContent">Daily Report <span className="fa fa-paperclip" style={{ marginLeft:"10vw", fontSize:"10px" }}></span></p>

                        </div>
                      </div>

                      </div>
                  </div>

                  <div className="coverDay">
                    <div className="copContent">
                      <div className="titleContent">03rd Friday</div>
                      <div className="lineContent" style={{ width:"20%", background:"#ccc" }}></div>
                      <div className="inputContent">
                        <div className="copInput">
                          <p className="timeContent">11.00 AM - 11.30 AM</p>
                          <p className="txtContent">Website for the Product</p>
                          <div className="btnCovers">
                          <p className="btnPaper"> <span className="fa fa-paper-plane-o"></span></p>
                          <p className="btnAM">AM</p>
                          <p className="btnES">ES</p>
                          <p className="btnPaperClip"><span className="fa fa-paperclip"></span> <font color="gray">10 Attachments</font></p>
                          </div>
                        </div>
                      </div>
                      <div className="inputContent" style={{ position:"absolute", top:"29vh" }}>
                        <div className="copInput">
                          <p className="timeContent">11.00 AM - 11.30 AM</p>
                          <p className="txtContent">Hey you guys we need to do <p style={{ position:"relative", bottom:"2vh" }}>this and that too ✌️.</p></p>
                          <div className="btnCovers">
                          <p className="btnPaper"> <span className="fa fa-paper-plane-o"></span></p>
                          <p className="btnES" style={{ background:"lavenderblush", color:"orange" }}>LA</p>
                          <p className="btnAM">AM</p>
                          <p className="btnES" style={{ background:"lavenderblush", color:"violet" }}><b>FS</b></p>
                          </div>
                        </div>
                      </div>

                      </div>
                  </div>
                  <div className="coverDay1">
                    <div className="copContent">
                      <div className="titleContent">06th Monday</div>
                      <div className="lineContent" style={{ width:"20%", background:"#ccc" }}></div>
                      <div className="inputContent">
                        <div className="copInput">
                          <p className="timeContent">11.00 AM - 11.30 AM</p>
                          <p className="txtContent">Start usability testing</p>
                          <div className="btnCovers">
                          <p className="btnPaper"> <span className="fa fa-paper-plane-o"></span></p>
                          <p className="btnAM">TX</p>
                          <p className="btnES">ES</p>
                          <p className="btnPaperClip"><span className="fa fa-paperclip"></span> <font color="gray">10 Attachments</font></p>
                          </div>
                        </div>
                      </div>
                      <div className="inputContent" style={{ position:"absolute", top:"29vh" }}>
                        <div className="copInput">
                          <p className="timeContent">11.00 AM - 11.30 AM</p>
                          <p className="txtContent">Open discussion </p>
                          <div className="btnCovers">
                          <p className="btnPaper"> <span className="fa fa-paper-plane-o"></span></p>
                          <p className="btnES" style={{ background:"lavenderblush", color:"orange" }}>LA</p>
                          </div>
                        </div>
                      </div>
                      <div className="inputContent" style={{ position:"absolute", top:"47vh", height:"10vh" }}>
                        <div className="copInput">
                          <p className="timeContent">11.00 AM - 11.30 AM</p>
                          <p className="txtContent">Daily Report <span className="fa fa-paperclip" style={{ marginLeft:"10vw", fontSize:"10px" }}></span></p>

                        </div>
                      </div>

                      </div>
                  </div>
                  <div className="coverDay">
                    <div className="copContent">
                      <div className="titleContent">03rd Friday</div>
                      <div className="lineContent" style={{ width:"20%", background:"#ccc" }}></div>
                      <div className="inputContent">
                        <div className="copInput">
                          <p className="timeContent">11.00 AM - 11.30 AM</p>
                          <p className="txtContent">Website for the Product</p>
                          <div className="btnCovers">
                          <p className="btnPaper"> <span className="fa fa-paper-plane-o"></span></p>
                          <p className="btnAM">AM</p>
                          <p className="btnES">ES</p>
                          <p className="btnPaperClip"><span className="fa fa-paperclip"></span> <font color="gray">10 Attachments</font></p>
                          </div>
                        </div>
                      </div>
                      <div className="inputContent" style={{ position:"absolute", top:"29vh" }}>
                        <div className="copInput">
                          <p className="timeContent">11.00 AM - 11.30 AM</p>
                          <p className="txtContent">Hey you guys we need to do <p style={{ position:"relative", bottom:"2vh" }}>this and that too ✌️.</p></p>
                          <div className="btnCovers">
                          <p className="btnPaper"> <span className="fa fa-paper-plane-o"></span></p>
                          <p className="btnES" style={{ background:"lavenderblush", color:"orange" }}>LA</p>
                          <p className="btnAM">AM</p>
                          <p className="btnES" style={{ background:"lavenderblush", color:"violet" }}><b>FS</b></p>
                          </div>
                        </div>
                      </div>

                      </div>
                  </div>
                  <div className="coverDay1">
                    <div className="copContent">
                      <div className="titleContent">06th Monday</div>
                      <div className="lineContent" style={{ width:"20%", background:"#ccc" }}></div>
                      <div className="inputContent">
                        <div className="copInput">
                          <p className="timeContent">11.00 AM - 11.30 AM</p>
                          <p className="txtContent">Start usability testing</p>
                          <div className="btnCovers">
                          <p className="btnPaper"> <span className="fa fa-paper-plane-o"></span></p>
                          <p className="btnAM">TX</p>
                          <p className="btnES">ES</p>
                          <p className="btnPaperClip"><span className="fa fa-paperclip"></span> <font color="gray">10 Attachments</font></p>
                          </div>
                        </div>
                      </div>
                      <div className="inputContent" style={{ position:"absolute", top:"29vh" }}>
                        <div className="copInput">
                          <p className="timeContent">11.00 AM - 11.30 AM</p>
                          <p className="txtContent">Open discussion </p>
                          <div className="btnCovers">
                          <p className="btnPaper"> <span className="fa fa-paper-plane-o"></span></p>
                          <p className="btnES" style={{ background:"lavenderblush", color:"orange" }}>LA</p>
                          </div>
                        </div>
                      </div>
                      <div className="inputContent" style={{ position:"absolute", top:"47vh", height:"10vh" }}>
                        <div className="copInput">
                          <p className="timeContent">11.00 AM - 11.30 AM</p>
                          <p className="txtContent">Daily Report <span className="fa fa-paperclip" style={{ marginLeft:"10vw", fontSize:"10px", color:"#82bdff" }}></span></p>

                        </div>
                      </div>

                      </div>
                  </div>

              </div>



            </div>

          </div>
        );
    }
}
