


const Home = () => {
   
    

   

    return (
        <div className='flex-1 mr-2 rounded-2xl bg-white shadow-sm overflow-y-auto dashboard-container'>
            {/* <Header title={'Dashboard'} /> */}
            <div className="px-5 pt-4 text-2xl font-medium">
                Dashboard
            </div>
            <div className="my-4 mt-3 px-6 flex flex-col gap-6">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {/* {
                        iconCardData.map((item, index) =>
                            <IconCard item={item} key={index} />
                        )
                    } */}
                </div>
                <div className="">
                    {/* <GraphSection /> */}
                </div>
            </div>
        </div>
    )
}

export default Home