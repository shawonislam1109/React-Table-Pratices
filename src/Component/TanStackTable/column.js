export  const COLUMNS = [
    {
      header: "ID",
      accessorKey: "id",
      footer: "ID",
    },
    {
      header: "Name",
      accessorFn: (row) => `${row.first_name} ${row.last_name}`,
    },
    // {
    //   header: "Fist Name",
    //   accessorKey: "first_name",
    //   footer: "Fist Name",
    // },
    // {
    //   header: "Last Name",
    //   accessorKey: "last_name",
    //   footer: "Last Name",
    // },

    {
      header: "Email",
      accessorKey: "email",
      footer: "Email",
    },
    {
      header: "Gender",
      accessorKey: "gender",
      footer: "Gender",
    },
    {
      header: "IP Address",
      accessorKey: "ip_address",
      footer: "IP Address",
    },
  ];