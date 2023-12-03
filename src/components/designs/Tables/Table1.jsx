import React from 'react'

const Table1 = ({ data, tableStructure, color, background }) => {
    return (
        <table className="w-full max-w-full divide-y divide-gray-200">
            <thead>
                <tr>
                    {
                        tableStructure.map((heading, index) =>
                            <th
                                key={index}
                                className={`px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-semibold ${color} uppercase tracking-wider`}
                            >
                                {heading.title}
                            </th>
                        )
                    }
                </tr>
            </thead>
            <tbody className={`${background} divide-y divide-gray-200`}>
                {
                    data.map((row, index) =>
                        <tr key={index}>
                            {
                                tableStructure.map((element, index1) =>
                                    <td className="px-4 py-3" key={index1}>
                                        <div className="text-sm leading-5 text-gray-700">
                                            {row[element.type]}
                                        </div>
                                    </td>
                                )
                            }
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default Table1
