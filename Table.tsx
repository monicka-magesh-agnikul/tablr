import React from "react";

// Generic Table Props
interface TableProps<T> {
  columns: { key: keyof T; label: string; render?: (value: any, row: T) => React.ReactNode }[];
  data: T[];
}

// Generic Table Header
const Thead = <T,>({ columns }: { columns: TableProps<T>["columns"] }) => (
  <thead>
    <tr className="bg-slate-50 border-y border-slate-200">
      {columns.map(({ key, label }) => (
        <th key={String(key)} className="p-4 text-sm font-normal text-slate-500">
          {label}
        </th>
      ))}
    </tr>
  </thead>
);

// Generic Table Data Cell
const Td = <T,>({ column, row }: { column: TableProps<T>["columns"][number]; row: T }) => {
  const value = row[column.key];

  return (
    <td className="p-4">
      {column.render ? column.render(value, row) : <span className="text-sm text-slate-700">{String(value)}</span>}
    </td>
  );
};

// Generic Table Body
const Tbody = <T,>({ columns, data }: { columns: TableProps<T>["columns"]; data: T[] }) => (
  <tbody>
    {data.map((row, rowIndex) => (
      <tr key={rowIndex} className="border-b border-slate-200">
        {columns.map((column) => (
          <Td key={String(column.key)} column={column} row={row} />
        ))}
      </tr>
    ))}
  </tbody>
);

// Generic Table Component
const Table = <T,>({ columns, data }: TableProps<T>) => {
  return (
    <section className="w-full mx-auto">
          <table className="w-full mt-4 text-left table-auto min-w-max">
            <Thead columns={columns} />
            <Tbody columns={columns} data={data} />
          </table>
    </section>
  );
};

export default Table 

