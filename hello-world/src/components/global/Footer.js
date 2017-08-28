import React, { Component } from 'react';
import PropTypes from 'prop-types';


import './css/Footer.css';

class Footer extends Component {
  static PropTypes = {
    copyright: PropTypes.string 
  };
  render() {
    const { copyright = '&copy; React 2017' } = this.props;
    return (

      <div className="Footer">        
          <footer>
            <p>
              <p dangerouslySetInnerHTML={{ __html: copyright }} />
            </p>
          </footer>        
        
      </div>
    );
  }
}

export default Footer;
