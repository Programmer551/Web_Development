import EditForm from "@/components/Tasks/EditForm";
import React from "react";
import Link from "next/link";
const EditPage = ({ params }) => {
  const id = params.id;
  //   console.log(id);
  
  return <EditForm id={id} />;
};

export default EditPage;
