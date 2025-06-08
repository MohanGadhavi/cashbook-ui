import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import React, { useMemo } from 'react';

const data = [
  {
    name: {
      firstName: 'John',
      lastName: 'Doe',
    },
    address: '261 Erdman Ford',
    city: 'East Daphne',
    state: 'Kentucky',
  },
  {
    name: {
      firstName: 'Jane',
      lastName: 'Doe',
    },
    address: '769 Dominic Grove',
    city: 'Columbus',
    state: 'Ohio',
  },
  {
    name: {
      firstName: 'Joe',
      lastName: 'Doe',
    },
    address: '566 Brakus Inlet',
    city: 'South Linda',
    state: 'West Virginia',
  },
  {
    name: {
      firstName: 'Kevin',
      lastName: 'Vandy',
    },
    address: '722 Emie Stream',
    city: 'Lincoln',
    state: 'Nebraska',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Omaha',
    state: 'Nebraska',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Omaha',
    state: 'Nebraska',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Omaha',
    state: 'Nebraska',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Omaha',
    state: 'Nebraska',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Omaha',
    state: 'Nebraska',
  },
];

export const CustomTable = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'name.firstName', //access nested data with dot notation
        header: 'First Name',
      },
      {
        accessorKey: 'name.lastName',
        header: 'Last Name',
      },
      {
        accessorKey: 'address', //normal accessorKey
        header: 'Address',
      },
      {
        accessorKey: 'city',
        header: 'City',
      },
      {
        accessorKey: 'state',
        header: 'State',
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    enableColumnActions: true, //column actions menu
    enableColumnFilters: true, //column filters
    enablePagination: true, //pagination
    enableSorting: true, //sorting

    enableColumnResizing: true, //column resizing
    columnResizeMode: 'onChange', //column resizing mode

    mrtTheme: (theme) => ({
      baseBackgroundColor: 'rgba(30, 41, 57, 1)', //change default background color
      cellNavigationOutlineColor: 'rgba(5, 223, 114, 0.5)', //change cell navigation outline color
      matchHighlightColor: 'rgba(255, 0, 0, 1)', //change match highlight color
      menuBackgroundColor: 'rgba(255, 255, 255, 1)', //change menu background color
    }),
    muiTablePaperProps: {
      style: {
        borderRadius: '0px',
      },
    },
    muiTopToolbarProps: {
      sx: {
        color: 'rgba(255, 255, 255, 1)',
        // backgroundColor: 'rgba(5, 223, 114, 0.05)',
        backgroundColor: 'transparent',
        '& .MuiIconButton-root': {
          color: 'rgba(255, 255, 255, 0.8)',
        },
      },
    },
    muiBottomToolbarProps: {
      sx: {
        color: 'rgba(255, 255, 255, 1)',
        // backgroundColor: 'rgba(5, 223, 114, 0.05)',
        backgroundColor: 'transparent',
      },
    },
    muiColumnActionsButtonProps: {
      sx: {
        color: 'white',
        opacity: 0.5,
      },
    },

    muiTableBodyRowProps: { hover: true },
    muiTableProps: {
      sx: {
        caption: {
          captionSide: 'top',
        },
      },
    },
    muiTableHeadCellProps: {
      sx: {
        border: '1px solid rgba(255, 255, 255, .2) ',
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: 'rgba(255, 255, 255, 1)',
        '& .MuiTableSortLabel-root .MuiSvgIcon-root': {
          color: 'rgba(255, 255, 255, 0.6) !important',
          '&:hover': {
            color: 'rgba(255, 255, 255, 0.8)',
          },
        },
      },
    },
    muiTableBodyCellProps: {
      sx: {
        border: '.1px solid rgba(255, 255, 255, .2)',
        color: 'rgba(255, 255, 255, 1)',
      },
    },
  });

  console.log('TABLE DATAAAA: ', table);

  return (
    <div className="overflow-x-auto">
      <MaterialReactTable table={table} layoutMode="grid-no-grow" />
    </div>
  );
};
