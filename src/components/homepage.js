import React from 'react'
import ReactGA from 'react-ga'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Banner from '../components/banner'
import LeadContent from '../components/leadcontent'
import ThreeSteps from '../components/threesteps'
import LoanCalculator from '../components/loancalculator'
import InfoButtonContainer from '../components/infobuttoncontainer'
import TermInfo from './terminfo'
import FAQ from './faq'
import Eligibility from './eligibility'
import ContactForm from './contactform'
import LoanApp from './loanapp'
import LeadCaptureForm from './leadcaptureform'
import ApplyFooter from './applyFooter';


class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          termInfo: false,
          faq: false,
          eligibility: false,
          contact: false
        }
        this.threesteps = React.createRef();
        this.apply = React.createRef();
      }
    
      // scrollToContent = () => {
      //   this.threesteps.current.scrollIntoView({ behavior: 'smooth' });
      //   ReactGA.event({
      //     category: 'How It Works Button',
      //     action: 'click'
      //   })
      // }

      scrollToApply = () => {
        this.apply.current.scrollIntoView({ behavior: 'smooth' });
        ReactGA.event({
          category: 'Apply Now Button',
          action: 'click',
          label: 'banner'
        })
      }

      scrollToApply2 = () => {
        this.apply.current.scrollIntoView({ behavior: 'smooth' });
        ReactGA.event({
          category: 'Apply Now Button',
          action: 'click',
          label: 'getting started'
        })
      }

      scrollToApply3 = () => {
        this.apply.current.scrollIntoView({ behavior: 'smooth' });
        ReactGA.event({
          category: 'Apply Now Button',
          action: 'click',
          label: 'footer'
        })
      }
    
      activateMoreInfo = () => {
        this.setState({
          termInfo: !this.state.termInfo,
          faq: false,
          eligibility: false,
          contact: false
        })
      }
    
      activateFAQ = () => {
        this.setState({
          termInfo: false,
          faq: !this.state.faq,
          eligibility: false,
          contact: false
        })
      }
    
      activateEligibility = () => {
        this.setState({
          termInfo: false,
          faq: false,
          eligibility: !this.state.eligibility,
          contact: false
        })
      }
    
      activateContact = () => {
        this.setState({
          termInfo: false,
          faq: false,
          eligibility: false,
          contact: !this.state.contact
        })
      }
    
      render(){
        return (
          <Layout>
            <SEO title={this.props.schoolName} />
            <Banner 
                howItWorksOnClick={this.scrollToContent}  
                applyNowOnClick={this.scrollToApply}  
            />
            <LeadContent />
            <ThreeSteps
              onClick={this.scrollToApply2} 
              ref={this.threesteps}
            />
            <LoanCalculator />
            <LoanApp 
              ref={this.apply}
              IP={this.props.IP}
              pageUri={this.props.pageUri}
              schoolName={this.props.schoolName}
            />
            <LeadCaptureForm 
              IP={this.props.IP}
              pageUri={this.props.pageUri}
              schoolName={this.props.schoolName}
            />
            <InfoButtonContainer 
              info={this.activateMoreInfo}
              faq={this.activateFAQ}
              eligibility={this.activateEligibility}
              contact={this.activateContact} 
            />
            {this.state.termInfo && <TermInfo />}
            {this.state.faq && <FAQ />}
            {this.state.eligibility && <Eligibility />}
            {this.state.contact && <ContactForm formName={this.props.formName}/>}
            <ApplyFooter
              onClick={this.scrollToApply3}
            />
          </Layout>
        )
      }
}

export default Homepage