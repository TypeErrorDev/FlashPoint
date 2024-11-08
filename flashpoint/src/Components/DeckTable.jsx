const DeckTable = () => {
  //TODO: Create the rows for each deck in the database

  const decks = [
    {
      name: "Deck 1",
      count: 10,
      points: 100,
    },
    {
      name: "Deck 2",
      count: 20,
      points: 200,
    },
    {
      name: "Deck 3",
      count: 30,
      points: 300,
    },
  ];

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
                  <th
                    scope="col"
                    className="hidden md:table-cell px-6 py-4 border text-center"
                  >
                    Points
                  </th>
                  <th scope="col" className="px-6 py-4 border text-center">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-6 py-4 text-center text-white hover:border-white">
                    Test
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeckTable;
