import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const tableHeads = [
  { label: 'Amount', value: 'amount', customClass: 'text-left' },
  { label: 'Date', value: 'date', customClass: 'text-center' },
  { label: 'Label', value: 'label', customClass: 'text-right' },
];

const tableData = [
  {
    type: 'CR',
    amount: 13000,
    date: '11-04-2025',
    label: 'Salary',
  },
  {
    type: 'DB',
    amount: 5000,
    date: '11-04-2025',
    label: 'Rent',
  },
  {
    type: 'CR',
    amount: 2000,
    date: '10-04-2025',
    label: 'Freelance',
  },
  {
    type: 'DB',
    amount: 1500,
    date: '09-04-2025',
    label: 'Groceries',
  },
  {
    type: 'DB',
    amount: 800,
    date: '08-04-2025',
    label: 'Utilities',
  },
];

function RecentTansactionsTable() {
  return (
    <Table className={''}>
      {/* <TableCaption className={'mt-3 text-white/15'}>
          A list of your recent transactions.
        </TableCaption> */}
      <TableHeader>
        <TableRow className={'hover:bg-transparent border-gray-600  h-[3rem]'}>
          {tableHeads.map((head, i) => (
            <TableHead
              key={'head' + i}
              className={`h-fit py-2 text-gray-400 font-light text-[0.8rem] ${head.customClass}`}
            >
              {head.label}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className={'h-full'}>
        {tableData.map((data, i) => (
          <TableRow
            key={i}
            className={` border-gray-600 h-[3rem] ${
              data.type === 'CR'
                ? 'bg-green-400/5 hover:bg-green-400/20'
                : data.type === 'DB'
                ? 'bg-red-400/5 hover:bg-red-400/20'
                : ''
            }`}
          >
            <TableCell
              className={`py-1 font-medium ${
                data.type === 'CR'
                  ? 'text-green-400'
                  : data.type === 'DB'
                  ? 'text-red-400'
                  : ''
              }`}
            >
              <span className="w-2.5">
                {data.type === 'CR' ? '+' : data.type === 'DB' ? '-' : ''}
              </span>
              {data.amount}
            </TableCell>
            <TableCell className="py-1 text-white/60 text-[0.8rem] text-center">
              {data.date}
            </TableCell>
            <TableCell className="py-1 pr-1.5 text-right">
              <span
                className={`rounded-2xl text-xs px-2 py-0.5 ${
                  data.type === 'CR'
                    ? 'bg-green-400/10'
                    : data.type === 'DB'
                    ? 'bg-red-400/10'
                    : ''
                }`}
              >
                {data.label}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default RecentTansactionsTable;
