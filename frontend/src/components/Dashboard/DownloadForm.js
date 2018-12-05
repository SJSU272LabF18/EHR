import React from 'react';
import ReactDOM from 'react-dom';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';



class DownloadForm extends React.Component {
    pdfExportComponent;
    grid;

    constructor(props) {
        super(props);
        this.state = {
            gridData: {
                'ProductID': '1',
                'ProductName': 'condoms',
                'UnitPrice': '1$',
                'UnitsInStock': '1000'
            }
        };
    }

    exportPDFWithMethod = () => {
        savePDF(ReactDOM.findDOMNode(this.grid), { paperSize: 'A4' });
    }
    exportPDFWithComponent = () => {
        this.pdfExportComponent.save();
    }

    render() {
        return (
            <div>
                <div className="example-config">
                    <button className="k-button" onClick={this.exportPDFWithComponent}>Export with component</button>
                    &nbsp;
                    <button className="k-button" onClick={this.exportPDFWithMethod}>Export with method</button>
                </div>

                <PDFExport ref={(component) => this.pdfExportComponent = component} paperSize="A4">
                    <div>
                        <p>hiii</p>
                    </div>
                </PDFExport>
            </div>
        );
    }

    
}

export default DownloadForm;