import React from 'react';
import ReactDOM from 'react-dom';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import logo from './logo.png';


class DownloadForm extends React.Component {
    pdfExportComponent;
    grid;

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    

    
    exportPDFWithMethod = () => {
        savePDF(ReactDOM.findDOMNode(this.grid), { paperSize: 'A4' });
    }
    exportPDFWithComponent = () => {
        this.pdfExportComponent.save();
    }

    render() {

        let mediation = null;
        let medicine2 = null
        let medicine3 = null
        let medicine4 = null
        let medicine5 = null
        let medication = null
        
            medication = (

                <div className="col-md-12">
                    <div className="col-md-6">
                        <label class="labelpdf">Medicine:</label>
                    </div>
                    <div className="col-md-3">
                        <label class="labelpdf">Dose:</label>
                    </div>
                    <div className="col-md-3">
                        <label class="labelpdf">Duration:</label>
                    </div>
                </div>
            )
        
        let medicine1 = null;
        
            medicine1 = (
                <div className="col-md-12">
                    <div className="col-md-6">
                        <label class="labelpdf">Advil</label>
                    </div>
                    <div className="col-md-3">
                        <label class="labelpdf">2 times</label>
                    </div>
                    <div className="col-md-3">
                        <label class="labelpdf">10 days</label>
                    </div>
                </div>
            )
        

        
            medicine2 = (
                <div className="col-md-12">
                    <div className="col-md-6">
                        <label class="labelpdf">Tylenol</label>
                    </div>
                    <div className="col-md-3">
                        <label class="labelpdf">2 times</label>
                    </div>
                    <div className="col-md-3">
                        <label class="labelpdf">10 days</label>
                    </div>
                </div>
            )
        

        if (medicine3 != null) {
            medicine3 = (
                <div className="col-md-12">
                    <div className="col-md-6">
                        <label class="labelpdf">mem</label>
                    </div>
                    <div className="col-md-3">
                        <label class="labelpdf">2 times:</label>
                    </div>
                    <div className="col-md-3">
                        <label class="labelpdf">10 days:</label>
                    </div>
                </div>
            )
        }

        if (medicine4 != null) {
            medicine4 = (
                <div className="col-md-12">
                    <div className="col-md-6">
                        <label class="labelpdf">mem</label>
                    </div>
                    <div className="col-md-3">
                        <label class="labelpdf">2 times:</label>
                    </div>
                    <div className="col-md-3">
                        <label class="labelpdf">10 days:</label>
                    </div>
                </div>
            )
        }

        if (medicine5 != null) {
            medicine5 = (
                <div className="col-md-12">
                    <div className="col-md-6">
                        <label class="labelpdf">mem</label>
                    </div>
                    <div className="col-md-3">
                        <label class="labelpdf">2 times:</label>
                    </div>
                    <div className="col-md-3">
                        <label class="labelpdf">10 days:</label>
                    </div>
                </div>
            )
        }







        return (
            <div>
                <div className="example-config">
                    <button className="k-button" onClick={this.exportPDFWithComponent}>Export with component</button>
                    &nbsp;
                    <button className="k-button" onClick={this.exportPDFWithMethod}>Export with method</button>
                </div>

                <PDFExport ref={(component) => this.pdfExportComponent = component} paperSize="A4">
                    <div className="col-md-12">
                        <div className="col-md-2"></div>
                        <div className="col-md-7">
                            <div className="col-md-12" style={{ border: "1px solid #ccc", height: "auto", padding: "0px 0px 50px 0px", backgroundColor: "#ffffff" }}>
                                <div className="col-md-12 " style={{ margin: "0px", padding: "0px" }}>
                                    <div className="col-md-12 pdf-banner">
                                        <img src={logo} style={{ position: "absolute", top: "50px", left: "30px" }}></img>
                                    </div>

                                </div>
                                <div className="col-md-12 " style={{ marginTop: "100px" }}>
                                    <div className="col-md-4 pdf-patient-info">
                                        <div className="col-md-9 tipbox">
                                            <span class="glyphicon glyphicon-user"></span><span>&nbsp;&nbsp;Patient Information</span>
                                        </div>
                                        <div className="col-md-12" style={{ paddingTop: "10px" }}>
                                            <label class="labelpdf">Name:</label>
                                            <h5>Ben</h5>
                                            <label class="labelpdf">Smith</label>
                                            <h5>ben@gmail.com</h5>
                                            <label class="labelpdf">Contact:</label>
                                            <h5>123456789</h5>
                                            <label class="labelpdf">Address:</label>
                                            <h5>839 Morrison Park</h5>
                                            <span>City: San Jose</span><span>&nbsp;&nbsp;&nbsp;State: California</span>
                                            <h5>Zipcode: 95126</h5>
                                            <label class="labelpdf">Gender</label>
                                            <h5>Male</h5>
                                            <label class="labelpdf">Blood Group:</label>
                                            <h5>A+</h5>
                                        </div>

                                    </div>
                                    <div className="col-md-8" style={{ borderLeft: "1px solid #757478" }}>
                                        <div className="col-md-1"></div>
                                        <div className="col-md-7 record-banner">
                                            <h4>Patient Physical Record</h4>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="col-md-12">
                                                <div class="col-md-1"></div>
                                                <div class="col-md-5">
                                                    <label class="labelpdf">Height:</label>
                                                </div>
                                                <div class="col-md-1"></div>
                                                <div class="col-md-5">
                                                    <label class="labelpdf">Weight:</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="col-md-12">
                                                <div class="col-md-1"></div>
                                                <div class="col-md-5">
                                                    <h5 class="labelpdf">5</h5>
                                                </div>
                                                <div class="col-md-1"></div>
                                                <div class="col-md-5">
                                                    <h5 class="labelpdf">100</h5>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="col-md-12">
                                                <div class="col-md-1"></div>
                                                <div class="col-md-5">
                                                    <label class="labelpdf">Blood Group:</label>
                                                </div>
                                                <div class="col-md-1"></div>
                                                <div class="col-md-5">
                                                    <label class="labelpdf">Sugar:</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="col-md-12">
                                                <div class="col-md-1"></div>
                                                <div class="col-md-5">
                                                    <h5 class="labelpdf">A</h5>
                                                </div>
                                                <div class="col-md-1"></div>
                                                <div class="col-md-5">
                                                    <h5 class="labelpdf">100</h5>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="col-md-12">
                                                <div class="col-md-1"></div>
                                                <div class="col-md-5">
                                                    <label class="labelpdf">Heart Rate:</label>
                                                </div>
                                                <div class="col-md-1"></div>
                                                <div class="col-md-5">
                                                    <label class="labelpdf">Body Temp:</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="col-md-12">
                                                <div class="col-md-1"></div>
                                                <div class="col-md-5">
                                                    <h5 class="labelpdf">75</h5>
                                                </div>
                                                <div class="col-md-1"></div>
                                                <div class="col-md-5">
                                                    <h5 class="labelpdf">98</h5>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="col-md-12">
                                                <div class="col-md-1"></div>
                                                <div class="col-md-5">
                                                    <label class="labelpdf">Allergy:</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="col-md-12">
                                                <div class="col-md-1"></div>
                                                <div class="col-md-5">
                                                    <h5 class="labelpdf">Peanuts</h5>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="col-md-12">
                                                <div class="col-md-1"></div>
                                                <div class="col-md-5">
                                                    <label class="labelpdf">Diagnosis Result:</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="col-md-12">
                                                <div class="col-md-1"></div>
                                                <div class="col-md-5">
                                                    <h5 class="labelpdf">High Blood Pressure</h5>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-1"></div>
                                        <div className="col-md-7 record-banner">
                                            <h4>Medication:</h4>
                                        </div>

                                        {medication}
                                        {medicine1}
                                        {medicine2}
                                        {medicine3}
                                        {medicine4}
                                        {medicine5}

                                        <div className="col-md-1"></div>
                                        <div className="col-md-7 record-banner">
                                            <h4>Emergency Contact Information:</h4>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="col-md-12">
                                                <div class="col-md-1"></div>
                                                <div class="col-md-5">
                                                    <label class="labelpdf">Name:</label>
                                                </div>
                                                <div class="col-md-1"></div>
                                                <div class="col-md-5">
                                                    <label class="labelpdf">Contact:</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="col-md-12">
                                                <div class="col-md-1"></div>
                                                <div class="col-md-5">
                                                    <h5 class="labelpdf">Pranali Bhavsar</h5>
                                                </div>
                                                <div class="col-md-1"></div>
                                                <div class="col-md-5">
                                                    <h5 class="labelpdf">123456789</h5>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="col-md-12">
                                                <div class="col-md-1"></div>
                                                <div class="col-md-10">
                                                    <label class="labelpdf">Address:</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="col-md-12">
                                                <div class="col-md-1"></div>
                                                <div class="col-md-5">
                                                    <h5 class="labelpdf">839 Morrison Park Drive</h5>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </PDFExport>
            </div>
        );
    }


}

export default DownloadForm;