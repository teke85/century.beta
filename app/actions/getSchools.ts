"use server"

interface School {
  id: string;
  name: string;
}

export async function getSchools(): Promise<School[]> {
  // This is a mock function. In a real application, you would fetch this data from your database.
  const zambianSchools: School[] = [
    { id: "1", name: "Lusaka International Community School" },
    { id: "2", name: "Baobab College" },
    { id: "3", name: "Chengelo School" },
    { id: "4", name: "Nkwazi Primary School" },
    { id: "5", name: "Kabulonga Girls Secondary School" },
    { id: "6", name: "Munali Secondary School" },
    { id: "7", name: "David Kaunda Technical High School" },
    { id: "8", name: "Hillcrest Technical Secondary School" },
    { id: "9", name: "Mpelembe Secondary School" },
    { id: "10", name: "Kitwe Boys Secondary School" },
    { id: "11", name: "Ndola Girls Technical Secondary School" },
    { id: "12", name: "Kansenshi Secondary School" },
    { id: "13", name: "Mwinilunga Secondary School" },
    { id: "14", name: "Chipembi Girls Secondary School" },
    { id: "15", name: "St. Mary's Secondary School" },
    { id: "16", name: "Kafue Secondary School" },
    { id: "17", name: "Choma Secondary School" },
    { id: "18", name: "Kasama Boys Secondary School" },
    { id: "19", name: "Solwezi Technical Secondary School" },
    { id: "20", name: "Monze Secondary School" }
  ];

  // Simulating an API call or database query with a slight delay
  await new Promise(resolve => setTimeout(resolve, 500));

  return zambianSchools;
}

