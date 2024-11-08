const DeckTable = () => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="w-full text-left text-sm font-light ">
              <thead className="border-b text-white font-medium dark:border-neutral-500  border ">
                <tr>
                  <th scope="col" className="px-6 py-4 border text-center">
                    Deck Name
                  </th>
                  <th scope="col" className="px-6 py-4 border text-center">
                    Count
                  </th>
                  <th scope="col" className="px-6 py-4 border text-center">
                    Points
                  </th>
                  <th scope="col" className="px-6 py-4 border text-center">
                    Actions
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeckTable;
