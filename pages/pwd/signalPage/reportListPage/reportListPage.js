import AppBar from "../comp_appbar";
import ReportList from "./comp_reportList";
import Panel from "./comp_panel";
import BottomBar from "../comp_bottomBar";
import { useEffect, useState } from "react";
import { riskEnumTable, categoryEnumTable } from "@/public/constants/enumTable";

export default function ReportListPage({
  curLocation,
  setCurReport,
  toNextPage,
}) {
  const [reportList, setReportList] = useState([]);

  useEffect(() => {
    getReportList();
  }, []);

  async function getReportList() {
    const data = await (
      await fetch(`http://192.168.172.148:8080/api/location/${curLocation.id}`)
    ).json();
    setReportList(
      data.map((val) => ({
        count: data.length,
        category: categoryEnumTable[val.category],
        risk: riskEnumTable[val.risk],
        contents: val.contents,
        specification: val.specification,
      }))
    );
  }

  return (
    <div className="container">
      <Panel
        locationName={curLocation.placeName}
        reportCount={reportList.length}
      />
      <ReportList
        reportList={reportList}
        setCurReport={setCurReport}
        toNextPage={toNextPage}
      />

      <style jsx>
        {`
          .container {
            width: 100vw;
            height: 100vh;

            background-color: #ffffff;

            display: flex;
            flex-direction: column;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
}
