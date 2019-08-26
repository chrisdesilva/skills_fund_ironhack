import React from 'react'
import GeneralTerms from './generalterms'
import InterestOnlyTerms from './interestonlyterms'
import ImmRepaymentTerms from './immrepaymentterms'

// update with school-specific info
const schoolInfo = {
    interestRate36: '8.99%',
    interestRate60: '',
    interestOnly: [{
        programName: 'Full-Time Web Development or Full-Time UX/UI Design Bootcamps',
        APR36: '11.25%',
        financeCharge36: '$2,215.73',
        IOPayment36: '$77.91',
        FullMonthlyPayment36: '$330.67',
        APR60: '12.92%',
        financeCharge60: '$4,406.10',
        IOPayment60: '$99.32',
        FullMonthlyPayment60: '$228.51',
        LoanExampleAmt: '$10,000',
        LoanExampleOFeeAmt: '$400',
        LoanExampleAmtPlusOFee: '$10,400',
        programLength: '2' // program length in months
    },
],
    immediateRepayment: [{ // set values to empty strings if no IR option is available
        programName: 'Part-Time Web Development or Part-Time UX/UI Design Bootcamps',
        APR36: '11.69%',
        financeCharge36: '$1,904.08',
        FullMonthlyPayment36: '$330.67',
        APR60: '13.19%',
        financeCharge60: '$3,710.86',
        FullMonthlyPayment60: '$228.51',
        LoanExampleAmt: '$10,000',
        LoanExampleOFeeAmt: '$400',
        LoanExampleAmtPlusOFee: '$10,400',
    }]
}
const multipleLoanLengths = false // true if both 36 and 60 month options are available
const multipleLoanTypes = true // true if both IR and IO are available

const TermInfo = () => (
    <div className="border-2 border-gray-300 shadow-xl rounded-lg text-center m-2 lg:m-10 p-8">
       <h2 className="mt-4">More Info On Terms</h2>
        <div>
            <GeneralTerms 
                multipleLoanLengths={multipleLoanLengths}
                multipleLoanTypes={multipleLoanTypes}
                interestRate36={schoolInfo.interestRate36}
                interestRate60={schoolInfo.interestRate60}
                IOAPR36={schoolInfo.interestOnly[0].APR36}
                IOAPR60={schoolInfo.interestOnly.APR60}
                IRAPR36={schoolInfo.immediateRepayment[0].APR36}
                IRAPR60={schoolInfo.immediateRepayment.APR60}
            />

            {schoolInfo.interestOnly.map(school => {
                return <InterestOnlyTerms
                programName={school.programName} 
                loanExampleAmt={school.LoanExampleAmt}
                APR36={school.APR36}
                APR60={school.APR60}
                finCharge36={school.financeCharge36}
                finCharge60={school.financeCharge60}
                ioPayment36={school.IOPayment36}
                ioPayment60={school.IOPayment60}
                fullPayment36={school.FullMonthlyPayment36}
                fullPayment60={school.FullMonthlyPayment60}
                oFee={school.LoanExampleOFeeAmt}
                loanPlusOFee={school.LoanExampleAmtPlusOFee}
                programLength={school.programLength}
                multipleLoanLengths={multipleLoanLengths}
            />
            })}

            {multipleLoanTypes && schoolInfo.immediateRepayment.map(school => {
                return <ImmRepaymentTerms
                programName={school.programName} 
                loanExampleAmt={school.LoanExampleAmt}
                APR36={school.APR36}
                APR60={school.APR60}
                finCharge36={school.financeCharge36}
                finCharge60={school.financeCharge60}
                fullPayment36={school.FullMonthlyPayment36}
                fullPayment60={school.FullMonthlyPayment60}
                oFee={school.LoanExampleOFeeAmt}
                loanPlusOFee={school.LoanExampleAmtPlusOFee}
                multipleLoanLengths={multipleLoanLengths}
                multipleLoanTypes={multipleLoanTypes}
            />
            })

            }
        </div>
    </div>
)

export default TermInfo