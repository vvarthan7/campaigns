import React, { Component } from 'react';
import jsonData from './campaigns.json';
import './CampaignList.css';

class CampaignList extends Component {

  constructor() {
    super()
    this.state = {
      campaign: false
    }
  }

  campaignAdd = () => {
    const { __campaignAdd } =this;
    __campaignAdd.classList.remove('hide');
  }

  campaignNew = () => {
    const campname = document.getElementById("campainname").value;
    const campdesc = document.getElementById("description").value;

    jsonData.push({"campaignName": campname, "description": campdesc});

    this.setState({ campaign: true});
    document.getElementById("form-container").reset();
    this.__campaignAdd.classList.add('hide');
    return jsonData;
  }

  campaignHistory = () => {
    const { __campaignHistory } =this;
    __campaignHistory.classList.remove('hide');
  }

  campaignList = () => {
    return (
        jsonData.map((item, i) => {
          return(
            <div className="campaign-list-item col-lg-8" onClick={this.campaignHistory}>
              <h4>{item.campaignName}</h4>
              <p>{item.description}</p>
            </div>
          );
        })
    );
  }

  render() {    
    return (
      <div className="campaign-list__container container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="col-lg-12 list">
            <h3>Campaign List</h3>
            <button type="button" className="btn" onClick={this.campaignAdd}>Create New</button>
            <div 
              className="campaignAddView hide"
              ref={div => {
                this.__campaignAdd = div;
                return div;
            }}>
              <div className="campaignAdd">
              <form id="form-container">
                <div className="form-group">
                  <label for="campainname">Campaign Name:</label>
                  <input type="text" className="form-control" id="campainname" />
                </div>
                <div className="form-group">
                  <label for="description">Description:</label>
                  <input type="text" className="form-control" id="description" />
                </div>
                <div className="form-group">
                  <button type="button" className="btn" onClick={this.campaignNew}>Create Campaign</button>
                </div>
                </form>
              </div>
            </div>
            </div>
            <div className="row campaign-list-view">
                {this.campaignList()}
              <div
                className="col-lg-4 campaign-history hide"
                ref={div => {
                this.__campaignHistory = div;
                return div;
              }}>
                <div className="history-view">
                  <h2>check</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CampaignList;
