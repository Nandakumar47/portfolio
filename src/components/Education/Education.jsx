import React from 'react'
import "./Education.css"
function Education() {
    return (
        <div className="education-main-div">
            <table>
                <tr>
                    <th>No.</th>
                    <th>Education</th>
                    <th>Institute Name</th>
                    <th>Place</th>
                    <th>University</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>High School</td>
                    <td>Ramavilasam HSS </td>
                    <td>Chokli,Kannur</td>
                    <td>Kerala Board Of Public Examinations</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Higher Secondary School</td>
                    <td>Ramavilasam HSS</td>
                    <td>Chokli,Kannur</td>
                    <td>Kerala Board of public Examinations</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>B-tech</td>
                    <td>Govt Engineering College Thrissur</td>
                    <td>Thrissur</td>
                    <td>KTU</td>
                </tr>
            </table>
        </div>
    )
}

export default Education
