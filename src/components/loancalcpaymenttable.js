import React from 'react'

const LoanCalcPaymentTable = () => (
    <div className="flex flex-col items-center">
        {/* WEB TABLE */}
        <table className="hidden lg:inline">
            <tbody>
                <tr>
                    <th className="text-center">Program</th>
                    <th className="text-center">Tuition</th>
                    <th className="text-center">Cost of Living</th>
                    <th className="text-center">Max Total</th>
                </tr>
                <tr>
                    <td className="text-center">Full-Time Web Development & Full-Time UX/UI Design Bootcamps</td>
                    <td className="text-center">$11,500 (includes $1,000 deposit)</td>
                    <td className="text-center">$5,000</td>
                    <td className="text-center">$15,500</td>
                </tr>
                <tr>
                    <td className="text-center">Part-Time Web Development & Part-Time UX/UI Design Bootcamps</td>
                    <td className="text-center">$12,000 (includes $1,000 deposit)</td>
                    <td className="text-center">N/A</td>
                    <td className="text-center">$11,000</td>
                </tr>
            </tbody>
        </table>

        {/* MOBILE TABLE */}
        <table className="lg:hidden">
            <tbody>
                <tr>
                    <th className="text-center">Full-Time Web Development & Full-Time UX/UI Design Bootcamps</th>
                </tr>
                <tr>
                    <td className="text-center">Tuition: $11,500 (includes $1,000 deposit)</td>
                </tr>
                <tr>
                    <td className="text-center">Cost of Living: $5,000</td>
                </tr>
                <tr>
                    <td className="text-center">Max Total: $15,500</td>
                </tr>
                <tr>
                    <th className="text-center">Part-Time Web Development & Part-Time UX/UI Design Bootcamps</th>
                </tr>
                <tr>
                    <td className="text-center">Tuition: $12,000 (includes $1,000 deposit)</td>
                </tr>
                <tr>
                    <td className="text-center">Cost of Living: N/A</td>
                </tr>
                <tr>
                    <td className="text-center">Max Total: $11,000</td>
                </tr>
            </tbody>
        </table>
    </div>
)

export default LoanCalcPaymentTable