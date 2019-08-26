import React from 'react'
import Button from './button'

const ApplyFooter = props => {
    return (
        <div className="flex justify-center mt-16 px-2 lg:px-0">
            <div className="flex flex-col items-center py-8 mt-3 lg:mt-0 mx-2 lg:mx-10 w-full lg:w-1/3 rounded shadow-2xl bg-white border-primary border-t-8">
                <h2 className="font-bold text-center">Ready to get Started?</h2>
                <div className="mx-2 px-12">
                <p className="text-center">Begin building your future today!</p>
                    <Button
                        buttonClassName="opacityApply uppercase bg-primary p-3 rounded-full shadow-lg text-white w-40"
                        divClassName="flex justify-center mt-5"
                        text="apply now"
                        onClick={props.onClick}
                    /> 
                </div>
            </div>
        </div>
    )
}

export default ApplyFooter