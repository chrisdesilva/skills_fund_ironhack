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
                    <th className="text-center">Optional Certification</th>
                    <th className="text-center">Max Total</th>
                </tr>
                <tr>
                    <td className="text-center">CORE Program</td>
                    <td className="text-center">$20,000</td>
                    <td className="text-center">$10,000</td>
                    <td className="text-center">$7,400</td>
                    <td className="text-center">$37,400</td>
                </tr>
                <tr>
                    <td className="text-center">HUNT Program</td>
                    <td className="text-center">$12,000</td>
                    <td className="text-center">$6,000</td>
                    <td className="text-center">$7,400</td>
                    <td className="text-center">$25,400</td>
                </tr>
                <tr>
                    <td className="text-center">PATH Program</td>
                    <td className="text-center">$16,000</td>
                    <td className="text-center">--</td>
                    <td className="text-center">$7,400</td>
                    <td className="text-center">$23,400</td>
                </tr>
            </tbody>
        </table>

        {/* MOBILE TABLE */}
        <table className="lg:hidden">
            <tbody>
                <tr>
                    <th className="text-center">CORE Program</th>
                </tr>
                <tr>
                    <td className="text-center">Tuition: $20,000</td>
                </tr>
                <tr>
                    <td className="text-center">Cost of Living: $10,000</td>
                </tr>
                <tr>
                    <td className="text-center">Optional Certification: $7,400</td>
                </tr>
                <tr>
                    <td className="text-center">Max Total: $37,400</td>
                </tr>
                <tr>
                    <th className="text-center">HUNT Program</th>
                </tr>
                <tr>
                    <td className="text-center">Tuition: $12,000</td>
                </tr>
                <tr>
                    <td className="text-center">Cost of Living: $6,000</td>
                </tr>
                <tr>
                    <td className="text-center">Optional Certification: $7,400</td>
                </tr>
                <tr>
                    <td className="text-center">Max Total: $25,400</td>
                </tr>
                <tr>
                    <th className="text-center">PATH Program</th>
                </tr>
                <tr>
                    <td className="text-center">Tuition: $16,000</td>
                </tr>
                <tr>
                    <td className="text-center">Cost of Living: --</td>
                </tr>
                <tr>
                    <td className="text-center">Optional Certification: $7,400</td>
                </tr>
                <tr>
                    <td className="text-center">Max Total: $23,400</td>
                </tr>
            </tbody>
        </table>
    </div>
)

export default LoanCalcPaymentTable