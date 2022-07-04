import React from "react";
import ProfileCard from "./ProfileCard";

const ManageAccount = () => {
  return (
    <div className="col-span-12 lg:col-span-9 grid lg:grid-cols-3 gap-4">
      <ProfileCard name="John doe" line1="example@mail.com" line2="08103431851" title="Personal Profile" />
      <ProfileCard
        title="Shipping Address"
        name="John doe"
        line1="21, Bade Abiona street, Agege, Lagos."
        line2="08103431851"
      />
      <ProfileCard
        title="Billing Address"
        name="John doe"
        line1="6, Olufeko street, Fola Agoro, Yaba, Lagos"
        line2="08103431851"
      />
    </div>
  );
};

export default ManageAccount;
