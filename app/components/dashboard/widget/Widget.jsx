import "./widget.scss";
import Image from "next/image";

const Widget = ({ icon, label, value }) => {
  return (
    <div className="col-lg-3 col-md-3 col-sm-6 col-12 mx-auto">
      <div className="widget shadow-sm">
        <div className="d-flex items-center">
          <Image
            src={icon}
            alt={icon}
            width={40}
            height={40}
            style={{ width: "34px", height: "34px" }}
          />
          <div className="title">{label}</div>
        </div>
        <div className="counter">{value}</div>
      </div>
    </div>
  );
};

export default Widget;
