import PropTypes from "prop-types"
import React from "react"
import schoolLogo from "../images/secureset_logo.png" // add school logo to images folder and import here
import skillsFund from "../images/skillsFund_logo.png"

// update school-specific info

const schoolInfo = {
  schoolName: 'SecureSet Academy',
  schoolUrl: 'https://secureset.com/' // update with url of school's website
}

const Header = ({ siteTitle }) => (
  <header>
    <div className="flex justify-center shadow-lg">
      <div className="w-full flex justify-around items-center py-2 px-2 lg:px-0">
          <a
            href={schoolInfo.schoolUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={schoolLogo} 
              alt={schoolInfo.schoolName}
              className="h-10"
              loading="lazy"
              id="schoolLogo"
            />
          </a>
          <h3 className="font-light mb-0 hidden lg:block">{schoolInfo.schoolName} tuition made easy</h3>
          <a
            href="https://skills.fund/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={skillsFund} 
              alt="Skills Fund logo"
              className="h-8"
              loading="lazy"
              id="skfLogo"
            />
          </a>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
