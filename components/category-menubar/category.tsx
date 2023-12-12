interface CategoryProps {
  category: string;
}

const Category = ({ category }: CategoryProps) => {
  return (
    <div>
      {category === "all" && <p>All</p>}
      {category === "companies" && <p>Companies</p>}
      {category === "phones" && <p>Phones</p>}
    </div>
  );
};

export default Category;
