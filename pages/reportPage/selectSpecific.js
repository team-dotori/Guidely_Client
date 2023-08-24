import Image from "next/image";

export default function SelectSpecific() {
  return (
    <div className="container">
      <div className="title">상세분류를 선택해 주세요.</div>
      <Item specificName={"어쩌고 저쩌고"} />
      <div className="divider" />
      <Item specificName={"어쩌고 저쩌고"} />
      <div className="divider" />
      <Item specificName={"어쩌고 저쩌고"} />

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .title {
          margin: 53px 0px 15px 0px;
          font-size: 22.87px;
          font-weight: 600;
        }

        .divider {
          height: 0.2px;
          width: 331px;
          background: rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </div>
  );
}

function Item({ specificName }) {
  return (
    <div className="container">
      <div className="title">{specificName}</div>
      <Image src="/icons/info.svg" width={20} height={20} alt="가이드라인" />
      <div style={{ width: 160 }} />
      <button className="select">선택</button>
      <style jsx>{`
        .container {
          width: 329px;
          height: 24px;

          margin: 15px 0px;

          display: flex;
          align-items: center;
        }

        .title {
          width: 109px;

          font-size: 15px;
          font-weight: 600;
        }

        .select {
          width: 40px;
          height: 24px;
          padding: 0px;

          background-color: transparent;
          border-color: rgba(0, 0, 0, 0.2);
          border-width: 0.2px;
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
}