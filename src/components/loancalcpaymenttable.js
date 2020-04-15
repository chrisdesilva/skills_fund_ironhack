import React from "react"

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
          <td className="text-center">
            Full-Time Web Development & Full-Time UX/UI Design Bootcamps
          </td>
          <td className="text-center">$12,500</td>
          <td className="text-center">$5,000</td>
          <td className="text-center">$17,500</td>
        </tr>
        <tr>
          <td className="text-center">
            Part-Time Web Development & Part-Time UX/UI Design Bootcamps
          </td>
          <td className="text-center">$12,500</td>
          <td className="text-center">N/A</td>
          <td className="text-center">$12,500</td>
        </tr>
        <tr>
          <td className="text-center">Web Development Online</td>
          <td className="text-center">$12,000</td>
          <td className="text-center">$5,000</td>
          <td className="text-center">$17,000</td>
        </tr>
      </tbody>
    </table>

    {/* MOBILE TABLE */}
    <table className="lg:hidden">
      <tbody>
        <tr>
          <th className="text-center">
            Full-Time Web Development & Full-Time UX/UI Design Bootcamps
          </th>
        </tr>
        <tr>
          <td className="text-center">Tuition: $12,500</td>
        </tr>
        <tr>
          <td className="text-center">Cost of Living: $5,000</td>
        </tr>
        <tr>
          <td className="text-center">Max Total: $17,500</td>
        </tr>
        <tr>
          <th className="text-center">Web Development Online Bootcamp</th>
        </tr>
        <tr>
          <td className="text-center">Tuition: $12,000</td>
        </tr>
        <tr>
          <td className="text-center">Cost of Living: $5,000</td>
        </tr>
        <tr>
          <td className="text-center">Max Total: $17,000</td>
        </tr>
        <tr>
          <th className="text-center">
            Part-Time Web Development & Part-Time UX/UI Design Bootcamps
          </th>
        </tr>
        <tr>
          <td className="text-center">Tuition: $12,500</td>
        </tr>
        <tr>
          <td className="text-center">Cost of Living: N/A</td>
        </tr>
        <tr>
          <td className="text-center">Max Total: $12,500</td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default LoanCalcPaymentTable
