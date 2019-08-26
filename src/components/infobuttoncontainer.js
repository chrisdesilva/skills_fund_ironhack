import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

// no updates necessary

const InfoButtonContainer = props => {
    return (
        <div className="flex flex-wrap items-center justify-around p-4 my-5 mx-2 lg:mx-10 rounded shadow-xl bg-purple-100">
            <div onClick={props.info} className="cursor-pointer w-1/4 footerLink flex flex-col items-center">
                <p className="m-0 text-primary">Term Details</p>
                <FontAwesomeIcon icon={faAngleDown} />
            </div>
            <div onClick={props.faq} className="cursor-pointer w-1/4 footerLink flex flex-col items-center">
                <p className="m-0 text-primary">FAQ</p>
                <FontAwesomeIcon icon={faAngleDown} />
            </div>
            <div onClick={props.eligibility} className="cursor-pointer w-1/4 footerLink flex flex-col items-center">
                <p className="m-0 text-primary">Eligibility</p>
                <FontAwesomeIcon icon={faAngleDown} />
            </div>
            <div onClick={props.contact} className="cursor-pointer w-1/4 footerLink flex flex-col items-center">
                <p className="m-0 text-primary">Contact</p>
                <FontAwesomeIcon icon={faAngleDown} />
            </div>
        </div>
    )
}



export default InfoButtonContainer