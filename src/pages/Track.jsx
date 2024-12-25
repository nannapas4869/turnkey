const Track = () => {
  return (
    <article className="bg-white w-full h-full">
      <div className="container mx-auto p-4">
        <h1 className="mb-1">Choose a Deadline for the selected KPIs</h1>
        <p className="font-light text-xl">
          Set clear, measuable target for each KPI to track employee
          performance.
        </p>
        <div className="flex flex-row gap-6 basis-auto mt-14">
             <div className=" w-96 h-44 bg-[#E6F6F2] rounded-xl">
                <div className="flex flex-col gap-6 px-4 py-10">
                    <p className="text-3xl">All KPIs</p>
                    <p className="text-3xl">50</p>
                </div>
            </div>
            <div className="w-96 h-44 bg-[#3AA94F] rounded-xl">
                <div className="flex flex-col gap-6 px-4 py-10">
                    <p className="text-3xl text-white">Completed KPIs</p>
                    <p className="text-3xl text-white">30</p>
                </div>
            </div>
            <div className=" w-96 h-44 bg-[#B9B4ED] rounded-xl">
                <div className="flex flex-col gap-6 px-4 py-10">
                    <p className="text-3xl text-white">On Track KPIs</p>
                    <p className="text-3xl text-white">3</p>
                </div>
            </div>
            <div className="w-96 h-44 bg-[#EDB4B5] rounded-xl">
                <div className="flex flex-col gap-6 px-4 py-10">
                    <p className="text-3xl text-white">Off Track KPIs</p>
                    <p className="text-3xl text-white">4</p>
                </div>
            </div>
            <div className=" w-96 h-44 bg-[#E3E3E3] rounded-xl">
                <div className="flex flex-col gap-6 px-4 py-10">
                    <p className="text-3xl text-[#6C6C6C]">Not Started KPIs</p>
                    <p className="text-3xl">5</p>
                </div>
            </div>
        </div>
       
      </div>
    </article>
  );
};

export default Track;
