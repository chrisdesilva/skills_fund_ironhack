import React from 'react'

const schoolName = 'SecureSet Academy'
const costOfLiving = true // true if at least one program has cost of living included
const interestOnly = true // true if interest-only payments are an option
const immediateRepayment = true // true if immediate repayment is an option
const multipleLoanLengths = true // true if 36 and 60 month options are both available

// interest payment FAQ info
const interestRate36 = '9.49%'
const interestRate60 = '11.46%'
const APR36 = '11.52% - 11.67%'
const APR60 = '12.92%- 12.99%'
const IOPayment36 = '$82.25'
const IOPayment60 = '$99.32'

// update with school-specific info
const FAQ = () => (
    <div className="border-2 border-gray-300 shadow-xl rounded-lg m-2 lg:m-10 p-8">
       <h2 className="mt-4 text-center">Frequently Asked Questions</h2>
       <h3 className="uppercase text-primary">how much can i borrow and for what specific uses?</h3>
       <p>The maximum amount you can borrow will depend on your program. You can finance your tuition, optional certification, and cost of living expenses.</p>
          <ul>
            <li><strong>For the CORE Full-Time Program,</strong> you may borrow from $2,000 to $20,000 for tuition. You may also borrow up to $10,000 for cost of living and up to $7,400 for optional certification.</li>
            <li><strong>For the HUNT Full-Time Program,</strong> you may borrow from $2,000 to $12,000 for tuition. You may also borrow up to $6,000 for cost of living and up to $7,400 for optional certification.</li>
            <li><strong>For the PATH Part-Time program,</strong> you may borrow from $2,000 to $16,000 for tuition and up to $7,400 for optional certification. Cost of living is not available for this program.</li>
          </ul>
          <p><strong>Please note:</strong> In order to finance cost of living, borrow at least $2,000 in tuition financing. You will pay your cash deposit directly to <strong>{schoolName}</strong>.</p>
     
       {costOfLiving &&
       <div> 
       <h3 className="uppercase text-primary">when will i receive my living stipend?</h3>

            {/* INCLUDE FIRST <p> IF ONLY CERTAIN PROGRAMS OFFER COST OF LIVING */}
            <p><strong>Only the CORE and HUNT programs are eligible for cost of living.</strong></p>
            <p>Your lump sum living stipend will be sent to you on the second Wednesday after your program start. You can elect to have your cost of living disbursed via electronic funds transfer or mailed directly to the address provided in their loan application.</p>
            <p>Please allow 1 - 5 business days for your electronic funds transfer to be reflected in your bank account. For all students who elect to have funds mailed to their address, please allow 5 - 10 business days for your check to arrive via U.S. Standard Mail.</p>
       </div>
       }
       <h3 className="uppercase text-primary">how and when will i repay my loan?</h3>
            <p>Upon loan acceptance, we will provide you with several options for making payments, including automated payments. You may create an account at <a href="https://www.aspireservicingcenter.com/" target="_blank" rel="noreferrer noopener" className="text-primary">AspireServicingCenter.com</a> at any time to manage payments and account balance.</p>
            {interestOnly && <p><strong>Interest-Only Loans: </strong>You will start paying interest on your loan roughly one month after your loan is disbursed to the school. Disbursement occurs on the second Wednesday after program start. You will make interest-only payments while in program and for 60 days following program completion.</p>}
            {interestOnly && <p>You will start making full monthly payments (interest plus principal) after your two-month grace period ends. This 60-day payment grace period helps you to keep your eye on finding the right job following program completion.</p>}
            {immediateRepayment && <p><strong>Immediate Repayment Loans: </strong>You will start making full monthly payments (interest plus principal) roughly one month after your loan is disbursed to your school. Disbursement occurs on the second Wednesday after program start.</p>}
            <p>There is no prepayment penalty with a Skills Fund loan.</p>
       
       <h3 className="uppercase text-primary">what is the deferment period?</h3>
            <p>The deferment period is defined as the time you are attending the course, plus an additional two months after program completion. These additional two months are considered your grace period.</p>
            {interestOnly && <p><strong>Interest-Only Loans: </strong>Interest-only payments are required during the deferment period. After the deferment period ends, payments of interest and principal are required. Paying interest on your loan during the deferment period will result in lower interest + principal payments during the full loan repayment phase of 36{multipleLoanLengths && <span> or 60</span>} months.</p>}
            {immediateRepayment && <p><strong>Immediate Repayment Loans: </strong>These loans have no deferment period. You will start making full monthly payments (interest plus principal) roughly one month after your loan is disbursed to your school. Disbursement occurs on the second Wednesday after program start.</p>}
       
       <h3 className="uppercase text-primary">how much are interest payments during the deferment period?</h3>
            <p>The interest-only payments depend on how much you borrow; the less you borrow, the less you will pay.</p>
            <p><strong>For a 36-month $10,000 loan:</strong> The interest rate is fixed at {interestRate36} / {APR36} estimated APR. The interest-only monthly payment is approximately {IOPayment36}.</p>
            {multipleLoanLengths && <p><strong>For a 60-month $10,000 loan:</strong> The interest rate is fixed at {interestRate60} / {APR60} estimated APR. The interest-only monthly payment is approximately {IOPayment60}.</p>}
            <p>Please see terms in "More Info On Terms" above.</p>
            <p><strong>Please note:</strong> The Annual Percentage Rate (APR) is estimated and may change slightly based on the loan type, origination fee, and approximate program length. To learn how an Annual Percentage Rate (APR) is calculated, <a className="text-primary" target="_blank" href="https://skills.fund/resources/how-is-an-apr-calculated" rel="noreferrer noopener">visit our blog.</a></p>
       
       <h3 className="uppercase text-primary">will i get charged any fees for taking out this loan?</h3>
            <p>You will be charged an origination fee of 4.0%. This amount will be added to the amount of tuition you borrow and is included in the total loan principal amount you finance. This fee helps cover the administrative fees associated with originating the loan and is charged by our partner bank. Please see terms in "More Info on Terms" above.</p>
            <p><strong>Please note:</strong> This fee is already reflected in the APR outlined above and in the loan calculator. Interested in learning more about your interest rate vs. APR? Check out our blog post <a className="text-primary" target="_blank" href="https://skills.fund/resources/apr-versus-interest-rates-whats-the-difference" rel="noreferrer noopener">here.</a></p>
       
       <h3 className="uppercase text-primary">i am applying for a scholarship. should i wait to apply for financing?</h3>
            <p>You may apply for financing in parallel to applying for your scholarship. If you are awarded your scholarship prior to the disbursement of your financing, please email <a href="mailto:CustomerTrust@Skills.Fund" className="text-primary">CustomerTrust@Skills.Fund</a> or notify your Admissions Counselor with the amount of your scholarship, and your requested financing amount will be downward adjusted.</p>
            <p>Should you receive your scholarship following the second Wednesday after program start, you can apply your funds to your loan balance at any time without a prepayment penalty.</p>
            <p><strong>Please note:</strong> Should you want to apply for a scholarship, it is recommended to apply for max tuition financing, and once your scholarship is awarded, Skills Fund can downward adjust your requested tuition financing. This may prevent you having to apply for additional funds, should you not be awarded your scholarship, as loans may not be upward adjusted.</p>
       
       <h3 className="uppercase text-primary">do i need a cosigner?</h3>
            <p>If you do not meet the loan underwriting criteria, a cosigner may be needed. You can (1) apply individually, and should you not be approved, you may be given the opportunity to amend your application with a cosigner, or (2) initiate your loan process with a cosigner.</p>
            <p><strong>Please note:</strong> We advise you to apply individually to begin, and should you not be credit approved, you may be given the opportunity to amend your application with a cosigner.</p>
       
       <h3 className="uppercase text-primary">when can i apply for a loan?</h3>
            <p>Apply for the loan after your acceptance into a program. Your program cohort must begin within 90 days of the date that you apply for a loan.</p>
       
       <h3 className="uppercase text-primary">what information do i need to provide skills fund?</h3>
            <p>During the loan application process, we will ask you for the following information:</p>
            <ul className="list-disc">
                <li>Full name</li>
                <li>Address</li>
                <li>Email and other contact information</li>
                <li>Social Security Number</li>
                <li>Date of birth</li>
                <li>Loan amount requested</li>
                <li>U.S. Citizenship/Permanent Resident status</li>
                <li>Current income <strong>(not a factor in credit decision)</strong></li>
                <li>Current employment status <strong>(not a factor in credit decision)</strong></li>
                <li>Three personal references</li>
                <li>Cosigner information (if applicable)</li>
            </ul>
        
        <h3 className="uppercase text-primary">will you check my credit?</h3>
            <p>Yes. When you apply we will check your credit, including your credit score. Interested in learning more about what goes into your credit score? Visit our blog and explore our <a className="text-primary" target="_blank" href="https://skills.fund/resources/financing-101" rel="noreferrer noopener">credit history resources</a> today.</p>
        
        <p className="text-left lg:text-center">For other general questions about Skills Fund financing, please visit our <a className="text-primary" target="_blank" href="https://skills.fund/resources/skills-fund-financing-faqs" rel="noreferrer noopener">Resource Center</a>.</p>
    </div>
)

export default FAQ