export default function Table() {

    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
                <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 flex-grow flex-col shadow-lg mb-6 mt-10">
                        <h3 className="font-semibold text-lg p-4 m-4">Table 1</h3>

                        <div className="block bg-transparent m-4 p-4 w-full overflow-x-auto">
                            <table className="w-full ">
                                <thead>
                                    <tr className="border border-solid border-lg-0 border-r-0 bg-pink-100">
                                        <th className="text-md px-6 py-3">Table row </th>
                                        <th className="text-md px-6 py-3">Table row 1</th>
                                        <th className="text-md px-6 py-3">Table row 2</th>
                                        <th className="text-md px-6 py-3">Table row 3 </th>
                                        <th className="text-md px-6 py-3">Table row  4</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th className="text-md px-6 py-3 bg-blue-100">Table col 1 </th>
                                        <td className="text-md px-6 py-3">Lorem ipsum dolor </td>
                                        <td className="text-md px-6 py-3">Lorem ipsum dolor </td>
                                        <td className="text-md px-6 py-3">Lorem ipsum dolor </td>
                                    </tr>
                                    <tr>
                                        <th className="text-md px-6 py-3 bg-blue-100">Table col 2 </th>
                                        <td className="text-md px-6 py-3"> Lorem ipsum dolor </td>
                                        <td className="text-md px-6 py-3">Lorem ipsum dolor </td>
                                        <td className="text-md px-6 py-3">Lorem ipsum dolor </td>
                                    </tr>
                                    <tr>
                                        <th className="text-md px-6 py-3 bg-blue-100">Table col 3 </th>
                                        <td className="text-md px-6 py-3">Lorem ipsum dolor </td>
                                        <td className="text-md px-6 py-3">Lorem ipsum dolor </td>
                                        <td className="text-md px-6 py-3">Lorem ipsum dolor </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}