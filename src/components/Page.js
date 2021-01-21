import FieldSet from "./FieldSet";

const Page = ({ pageData }) => {
  return (
    <>
      <p className="page-title">{pageData.title}</p>
      { pageData.children.map((fieldSet) => (
        <FieldSet fieldSetData={fieldSet} key={fieldSet["uuid"]} />
      )) }
    </>
  );
};

export default Page;
