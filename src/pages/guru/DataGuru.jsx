import React, { useState, useEffect } from "react";
import Main from "../../components/Main";
import DataTable from "react-data-table-component";
import Cookies from "js-cookie";
import axios from "axios";

function DataGuru() {
  const [user, setUser] = useState();
  const [columns, setColumns] = useState([]);
  const [pending, setPending] = React.useState(true);
  const [customStyles, setCustomStyles] = useState();

  const dataUser = async () => {
    const dataToken = Cookies.get("authentication");
    const token = dataToken.split(",");
    try {
      const response = await axios
        .get("http://127.0.0.1:8000/api/siswa", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token[0],
          },
        })
        .then((res) => res.data.data);
      console.log(response);
      setUser(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    dataUser();
    const timeout = setTimeout(() => {
      setColumns([
        {
          name: "Name",
          selector: (row) => row.nama,
          sortable: true,
          style: {
            fontSize: "8px",
          },
        },
        {
          name: "Email",
          selector: (row) => row.nis,
          sortable: true,
          style: {
            fontSize: "8px",
          },
        },
        {
          name: "Address",
          selector: (row) => row.alamat,
          sortable: true,
          style: {
            fontSize: "8px",
          },
        },
      ]);
      setCustomStyles({
        header: {
          style: {
            fontSize: "10px",
            fontWeight: "bold",
          },
        },
        headCells: {
          style: {
            fontSize: "10px",
            fontWeight: "bold",
            justifyContent: "center",
            backgroundColor: "#F1F5F9",
          },
        },
        rows: {
          highlightOnHoverStyle: {
            backgroundColor: "rgb(230, 244, 244)",
            borderBottomColor: "#FFFFFF",
            borderRadius: "25px",
            outline: "1px solid #FFFFFF",
          },
        },
        cells: {
          style: {
            padding: "-30px 10px",
            margin: "-30px 0px",
          },
        },
        pagination: {
          style: {
            fontSize: "8px",
            fontWeight: "bold",
          },
        },
        icon: { style: { fontSize: "8px", fontWeight: "bold" } },
      });
      setPending(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Main>
      <div className="grid grid-cols-5 bg-slate-100">
        <div className="col-span-4 col-start-2 pb-2 pr-2 overflow-y-auto">
          <div className="flex justify-start py-4">
            <h4 className="font-bold text-xs text-slate-500">Data Guru</h4>
          </div>
          <div className="flex flex-col gap-y-10">
            <div className="grid gap-5 grid-col-1 ">
              <div className="p-5 transition duration-300 bg-white rounded-lg shadow-md text-slate-500 tetx-[12px]">
                <DataTable
                  className="text-[10px]"
                  data={user}
                  columns={columns}
                  progressPending={pending}
                  customStyles={customStyles}
                  pagination
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}

export default DataGuru;
